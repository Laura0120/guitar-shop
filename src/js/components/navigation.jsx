import React from "react";
import { connect } from "react-redux";

import { ActionCreator } from "../store/action";
import { AppRoute } from "../const";

const Navigation = (props) => {
  const { onCatalogClick } = props;
  return (
    <nav className="page-header__navigation navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <a
            href="#catalog"
            onClick={(evt) => {
              evt.preventDefault();
              onCatalogClick();
            }}
          >
            Каталог
          </a>
        </li>
        <li className="navigation__item">
          <a
            onClick={(evt) => {
              evt.preventDefault();
            }}
            href="#shops"
          >
            Где купить?
          </a>
        </li>
        <li className="navigation__item">
          <a
            onClick={(evt) => {
              evt.preventDefault();
            }}
            href="#about-company"
          >
            О компании
          </a>
        </li>
        <li className="navigation__item">
          <a
            onClick={(evt) => {
              evt.preventDefault();
            }}
            href="#service-centers"
          >
            Cервис-центры
          </a>
        </li>
      </ul>
    </nav>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onCatalogClick() {
    dispatch(ActionCreator.redirectToRoute(AppRoute.CATALOG.url));
  },
});

export { Navigation };
export default connect(null, mapDispatchToProps)(Navigation);
