import React from "react";
import { connect } from "react-redux";

import Navigation from "./navigation";
import MenuUser from "./menu-user";
import BreadCrumbs from "./bread-crumbs";
import Filters from "./filters";
import Sort from "./sort";
import CatalogSection from "./catalog-section";
import PopupAddedSuccessfully from "./popup-added-successfully";
import PopupAddCart from "./popup-add-cart";
import withPagination from "../hocs/with-pagination";
import { AppRoute, CATALOG } from "../const";

const CatalogWrapped = withPagination(CatalogSection);

const CatalogPage = (props) => {
  const { popupAddCartIsOpen, popupAddedSucessfullyIsOpen } = props;
  return (
    <React.Fragment>
      <header className="page-header">
        <div className="page-header__wrapper">
          <div className="page-header__logo">
            <img
              src="img/logo.svg"
              width="67"
              height="70"
              alt="Логотип Guitar-shop"
            />
          </div>
          <Navigation />
          <MenuUser />
        </div>
      </header>
      <main className="page-content">
        <div className="page-content__wrapper">
          <h1>Каталог гитар</h1>
          <BreadCrumbs breadCrumbsList={[AppRoute.CATALOG]} />
          <Filters />
          <div>
            <Sort />
            <CatalogWrapped productList={CATALOG} />
          </div>
          {popupAddCartIsOpen && <PopupAddCart />}
          {popupAddedSucessfullyIsOpen && <PopupAddedSuccessfully />}
        </div>
      </main>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  popupAddCartIsOpen: state.APP_STATE.popupAddCartIsOpen,
  popupAddedSucessfullyIsOpen: state.APP_STATE.popupAddedSucessfullyIsOpen,
});

export { CatalogPage };
export default connect(mapStateToProps, null)(CatalogPage);
