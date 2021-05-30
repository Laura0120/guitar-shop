import React, { useEffect } from "react";
import { connect } from "react-redux";
import { disablePageScrolling, enablePageScrolling } from "../utils";
import { ActionCreator } from "../store/action";
import PopupContent from "./popup-content";

const PopupAddCart = (props) => {
  const { productItem, closePopupAddCart, addToCart } = props;

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
    closePopupAddCart();
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
        <h2>Добавить товар в корзину</h2>
        <button
          type="button"
          className="popup__button-close button button--close"
          aria-label="закрыть попап"
          onClick={onClosePopup}
        ></button>
        {<PopupContent productItem={productItem} />}
        <div className="popup__button-wrapper">
          <button
            type="button"
            className="popup__button button button--orange"
            onClick={() => {
              addToCart(productItem);
              onClosePopup();
            }}
          >
            Добавить в корзину
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  productItem: state.APP_STATE.openProduct,
});
const mapDispatchToProps = (dispatch) => ({
  closePopupAddCart() {
    dispatch(ActionCreator.togglePopupAddCartState(false));
    dispatch(ActionCreator.setOpenProduct(null));
  },
  addToCart(value) {
    dispatch(ActionCreator.addToCart(value));
    dispatch(ActionCreator.togglePopupAddedSucessfullyState(true));
  },
});

export { PopupAddCart };
export default connect(mapStateToProps, mapDispatchToProps)(PopupAddCart);
