import React from "react";
import { connect } from "react-redux";

import { ActionCreator } from "../store/action";
import { addSpacesAfterThreeCharacters } from "../utils";

const CartProductItem = (props) => {
  const {
    productItem,
    count,
    onIncrementClick,
    onDecrementClick,
    openPopupDeleteFromCart,
  } = props;
  const { vendorCode, name, type, countStrings, price, imgMin } = productItem;

  return (
    <React.Fragment>
      <button
        type="button"
        className="cart-item__button-close button button--close"
        aria-label="удалить товар из корзины"
        onClick={() => {
          openPopupDeleteFromCart(productItem);
        }}
      ></button>
      <div className="cart-item__image">
        <picture>
          <source type="image/webp" set={`img/${imgMin}.webp`} />
          <img src={`img/${imgMin}.jpg`} width="53" height="128" alt={name} />
        </picture>
      </div>
      <div className="cart-item__wrapper">
        <div className="cart-item__data">
          <h3 className="cart-item__title">{name}</h3>
          <p>{`Артикул: ${vendorCode}`}</p>
          <p>{`${type}, ${countStrings} струнная`}</p>
        </div>
        <p className="cart-item__price">{`${addSpacesAfterThreeCharacters(
          price
        )} ₽`}</p>
        <div className="cart-item__buttons-wrapper">
          <button
            type="button"
            className="cart-item__button cart-item__button--decrement"
            onClick={() => {
              count > 1
                ? onDecrementClick(productItem)
                : openPopupDeleteFromCart(productItem);
            }}
          >
            -<span className="visually-hidden">уменьшить на 1</span>
          </button>
          <div className="cart-item__button cart-item__button--count">
            {count}
          </div>
          <button
            type="button"
            className="cart-item__button cart-item__button--increment"
            onClick={() => {
              onIncrementClick(productItem);
            }}
          >
            +<span className="visually-hidden">уведичить на 1</span>
          </button>
        </div>
        <p className="cart-item__sum">{`${addSpacesAfterThreeCharacters(
          price * count
        )} ₽`}</p>
      </div>
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  openPopupDeleteFromCart(value) {
    dispatch(ActionCreator.setOpenProduct(value));
    dispatch(ActionCreator.togglePopupDeleteFromCartState(true));
  },
  onDecrementClick(value) {
    dispatch(ActionCreator.reduceInCart(value));
  },
  onIncrementClick(value) {
    dispatch(ActionCreator.addToCart(value));
  },
});

export { CartProductItem };
export default connect(null, mapDispatchToProps)(CartProductItem);
