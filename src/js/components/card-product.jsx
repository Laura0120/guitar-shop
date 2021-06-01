import React from "react";
import { connect } from "react-redux";

import { ActionCreator } from "../store/action";
import { RATING_STAR_COUNT, GUITARS_DATA } from "../const";
import { addSpacesAfterThreeCharacters } from "../utils";

const CardProduct = (props) => {
  const { productItem, setOpenProduct, togglePopupAddCartState } = props;
  const { name, popularity, price, img, type } = productItem;

  return (
    <React.Fragment>
      <div
        className={`card-product__image ${
          type === GUITARS_DATA[1].type ? `card-product__image--electro` : ``
        }`}
      >
        <picture>
          <source type="image/webp" set={`img/${img}.webp`} />
          <img src={`img/${img}.jpg`} width="68" height="190" alt={name} />
        </picture>
      </div>
      <div className="card-product__data">
        <div className="card-product__rating">
          {RATING_STAR_COUNT.map((item) => (
            <div key={item} className="card-product__star"></div>
          ))}
          <span className="card-product__popularity">{popularity}</span>
        </div>
        <div className="card-product__data-wrapper ">
          <span className="card-product__name">{name}</span>
          <span className="card-product__price">{`${addSpacesAfterThreeCharacters(
            price
          )} ₽`}</span>
        </div>
        <div className="card-product__data-wrapper card-product__data-wrapper--buttons ">
          <a
            href="#more-details"
            className="card-product__button button button--gray"
            onClick={(evt) => {
              evt.preventDefault();
            }}
          >
            Подробнее
          </a>
          <a
            href="#buy"
            className="card-product__button card-product__button--buy button button--orange"
            onClick={(evt) => {
              evt.preventDefault();
              setOpenProduct(productItem);
              togglePopupAddCartState(true);
            }}
          >
            Купить
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};
const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  setOpenProduct(value) {
    dispatch(ActionCreator.setOpenProduct(value));
  },
  togglePopupAddCartState(value) {
    dispatch(ActionCreator.togglePopupAddCartState(value));
  },
});

export { CardProduct };
export default connect(mapStateToProps, mapDispatchToProps)(CardProduct);
