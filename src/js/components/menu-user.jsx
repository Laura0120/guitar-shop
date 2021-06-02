import React from "react";
import { connect } from "react-redux";

import { ActionCreator } from "../store/action";
import { AppRoute } from "../const";
import { FUNCTION, NUMBER } from "../prop-type";

const MenuUser = (props) => {
  const { countItemsInCart, onCartClick } = props;
  return (
    <div className="page-header__menu-user menu-user">
      <a href="#map" className="menu-user__item menu-user__item--location">
        <span className="visually-hidden">Наша локация</span>
        <img
          src="img/icon-location.svg"
          width="12"
          height="14"
          alt="иконка локации"
          className="menu-user__item-icon menu-user__item-icon--location"
        />
      </a>
      <a href="#search" className="menu-user__item menu-user__item--search">
        <span className="visually-hidden">Поиск по сайту</span>
        <img
          src="img/icon-search.svg"
          width="14"
          height="14"
          alt="иконка лупы"
          className="menu-user__item-icon menu-user__item-icon--search"
        />
      </a>
      <a
        href="#cart"
        className="menu-user__item menu-user__item--cart"
        onClick={(evt) => {
          evt.preventDefault();
          onCartClick();
        }}
      >
        <span className="visually-hidden">Корзина с товарами</span>
        <img
          src="img/icon-cart.svg"
          width="16"
          height="18"
          alt="иконка корзины"
          className="menu-user__item-icon menu-user__item-icon--cart"
        />
        <span>{countItemsInCart ? countItemsInCart : ``}</span>
      </a>
    </div>
  );
};

MenuUser.propTypes = {
  countItemsInCart: NUMBER,
  onCartClick: FUNCTION,
};

const mapStateToProps = (state) => ({
  countItemsInCart: Object.keys(state.APP_STATE.сart).length,
});

const mapDispatchToProps = (dispatch) => ({
  onCartClick() {
    dispatch(ActionCreator.redirectToRoute(AppRoute.CART.url));
  },
});

export { MenuUser };
export default connect(mapStateToProps, mapDispatchToProps)(MenuUser);
