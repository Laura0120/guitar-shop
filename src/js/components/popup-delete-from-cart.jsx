import React, { useEffect } from "react";
import { connect } from "react-redux";

import { ActionCreator } from "../store/action";
import PopupContent from "./popup-content";
import { disablePageScrolling, enablePageScrolling } from "../utils";
import { FUNCTION, PRODUCT_ITEM } from "../prop-type";

const PopupDeleteFromCart = (props) => {
  const { productItem, closePopupDeleteFromCart, deleteFromCart } = props;

  const onOverlayClick = (evt) => {
    if (
      !evt.target.closest(".popup-wrapper") &&
      !evt.target.closest(".popup__button-close")
    ) {
      onClosePopup();
    }
  };

  const onEcsDown = (evt) => {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      onClosePopup();
    }
  };

  const onClosePopup = () => {
    enablePageScrolling();
    document.removeEventListener("click", onOverlayClick);
    document.removeEventListener("keydown", onEcsDown);
    closePopupDeleteFromCart();
  };

  useEffect(() => {
    disablePageScrolling();
    document.addEventListener("click", onOverlayClick);
    window.addEventListener("keydown", onEcsDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="popup">
      <div className="popup__wrapper">
        <h2>Удалить этот товар?</h2>
        <button
          type="button"
          className="popup__button-close button button--close"
          aria-label="закрыть попап"
          onClick={onClosePopup}
        ></button>
        {<PopupContent productItem={productItem} />}
        <div className="popup__button-wrapper popup__button-wrapper--delete-from-cart">
          <button
            type="button"
            className="popup__button button button--orange"
            onClick={() => {
              deleteFromCart(productItem);
            }}
          >
            Удалить товар
          </button>
          <button
            type="button"
            className="popup__button button button--transparent"
            onClick={onClosePopup}
          >
            Продолжить покупки
          </button>
        </div>
      </div>
    </div>
  );
};

PopupDeleteFromCart.propTypes = {
  productItem: PRODUCT_ITEM,
  closePopupDeleteFromCart: FUNCTION,
  deleteFromCart: FUNCTION,
};

const mapStateToProps = (state) => ({
  productItem: state.APP_STATE.openProduct,
});

const mapDispatchToProps = (dispatch) => ({
  deleteFromCart(value) {
    dispatch(ActionCreator.togglePopupDeleteFromCartState(false));
    dispatch(ActionCreator.deleteFromCart(value));
    dispatch(ActionCreator.setOpenProduct(null));
  },
  closePopupDeleteFromCart() {
    dispatch(ActionCreator.togglePopupDeleteFromCartState(false));
    dispatch(ActionCreator.setOpenProduct(null));
  },
});

export { PopupDeleteFromCart };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PopupDeleteFromCart);
