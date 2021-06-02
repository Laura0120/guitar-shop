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
import SocialList from "./social-list";
import FoooterContent from "./footer-content";
import withPagination from "../hocs/with-pagination";
import { AppRoute } from "../const";
import { BOOLEAN, PRODUCT_LiST } from "../prop-type";

const CatalogWrapped = withPagination(CatalogSection);

const CatalogPage = (props) => {
  const { popupAddCartIsOpen, popupAddedSucessfullyIsOpen, products } = props;
  return (
    <React.Fragment>
      <header className="page-header">
        <div className="page-header__wrapper">
          <div className="page-header__logo">
            <img
              src="img/logo-header.svg"
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
            <CatalogWrapped productList={products} />
          </div>
          {popupAddCartIsOpen && <PopupAddCart />}
          {popupAddedSucessfullyIsOpen && <PopupAddedSuccessfully />}
        </div>
      </main>
      <footer className="page-footer">
        <div className="page-footer__wrapper">
          <div>
            <div className="page-footer__logo">
              <img
                src="img/logo-footer.svg"
                width="67"
                height="70"
                alt="Логотип Guitar-shop"
              />
            </div>
            <SocialList />
          </div>
          <FoooterContent />
        </div>
      </footer>
    </React.Fragment>
  );
};

CatalogPage.propTypes = {
  popupAddCartIsOpen: BOOLEAN,
  popupAddedSucessfullyIsOpen: BOOLEAN,
  products: PRODUCT_LiST,
};

const mapStateToProps = (state) => ({
  popupAddCartIsOpen: state.APP_STATE.popupAddCartIsOpen,
  popupAddedSucessfullyIsOpen: state.APP_STATE.popupAddedSucessfullyIsOpen,
  products: state.APP_STATE.products,
});

export { CatalogPage };
export default connect(mapStateToProps, null)(CatalogPage);
