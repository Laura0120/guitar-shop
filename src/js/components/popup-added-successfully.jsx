import React, { useEffect } from "react";
import { connect } from "react-redux";
import { disablePageScrolling, enablePageScrolling } from "../utils";
import { AppRoute } from "../const";
import { FUNCTION } from "../prop-type";
import { ActionCreator } from "../store/action";

const PopupAddedSuccessfully = (props) => {
  const { closePopupAddedSucessfully, onCartClick } = props;

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
    closePopupAddedSucessfully();
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
        <h2>Товар успешно добавлен в корзину</h2>
        <button
          type="button"
          className="popup__button-close button button--close"
          aria-label="закрыть попап"
          onClick={onClosePopup}
        ></button>
        <div className="popup__button-wrapper popup__button-wrapper--added-successfully">
          <button
            type="button"
            className="popup__button button button--orange"
            onClick={onCartClick}
          >
            Перейти в корзину
          </button>
          <button
            type="button"
            className="popup__button button button--transparent"
            onClick={closePopupAddedSucessfully}
          >
            Продолжить покупки
          </button>
        </div>
      </div>
    </div>
  );
};

PopupAddedSuccessfully.propTypes = {
  closePopupAddedSucessfully: FUNCTION,
  onCartClick: FUNCTION,
};

const mapDispatchToProps = (dispatch) => ({
  closePopupAddedSucessfully() {
    dispatch(ActionCreator.togglePopupAddedSucessfullyState(false));
  },
  onCartClick() {
    dispatch(ActionCreator.redirectToRoute(AppRoute.CART.url));
    dispatch(ActionCreator.togglePopupAddedSucessfullyState(false));
  },
});

export { PopupAddedSuccessfully };
export default connect(null, mapDispatchToProps)(PopupAddedSuccessfully);
