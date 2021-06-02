import React from "react";
import { connect } from "react-redux";

import Navigation from "./navigation";
import MenuUser from "./menu-user";
import BreadCrumbs from "./bread-crumbs";
import CartSection from "./cart-section";
import SocialList from "./social-list";
import FoooterContent from "./footer-content";
import PopupDeleteFromCart from "./popup-delete-from-cart";
import { BOOLEAN } from "../prop-type";

import { AppRoute } from "../const";

const CartPage = (props) => {
  const { popupDeleteFromCartIsOpen } = props;
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
        <div className="page-content__wrapper page-content__wrapper--cart">
          <h1>Корзина</h1>
          <BreadCrumbs breadCrumbsList={[AppRoute.CATALOG, AppRoute.CART]} />
          <CartSection />
          {popupDeleteFromCartIsOpen && <PopupDeleteFromCart />}
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

CartPage.propTypes = {
  popupDeleteFromCartIsOpen: BOOLEAN,
};

const mapStateToProps = (state) => ({
  popupDeleteFromCartIsOpen: state.APP_STATE.popupDeleteFromCartIsOpen,
});

export { CartPage };
export default connect(mapStateToProps, null)(CartPage);
