import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";

import CartProductItem from "./cart-product-item";
import { PROMO_CODE, GUITARS_DATA } from "../const";
import { addSpacesAfterThreeCharacters } from "../utils";

const CartSection = (props) => {
  const { itemsInTheCart } = props;
  const [totalSum, setTotalSum] = useState(0);
  const [promoCode, setPromoCode] = useState(null);
  const [isValidPromoCode, setIsValidPromoCode] = useState(true);

  const promoCodeRef = useRef();

  const applyValidPromoCode = (value) => {
    setPromoCode(value);
    setIsValidPromoCode(true);
  };

  const applyInalidPromoCode = (value) => {
    if (value) {
      setPromoCode(null);
      setIsValidPromoCode(false);
      return;
    }
    return;
  };

  useEffect(() => {
    const getDiscountByPromoCode = () => {
      switch (promoCode) {
        case "GITARAHIT":
          return (totalSum / 100) * 10;
        case "SUPERGITARA":
          return 700;
        case "GITARA2020":
          return (totalSum / 100) * 30 < 3500 ? (totalSum / 100) * 30 : 3500;
        default:
          return null;
      }
    };
    const totalSum = itemsInTheCart.reduce(
      (totalSum, item) => totalSum + item.product.price * item.count,
      0
    );
    setTotalSum(Math.round(totalSum - getDiscountByPromoCode()));
  }, [itemsInTheCart, promoCode]);

  return (
    <section className="page-content__cart cart">
      <h2 className="visually-hidden">Корзина с товарами</h2>
      <ul className="cart__list">
        {itemsInTheCart.map((item, i) => (
          <li
            key={i}
            className={`cart-item ${
              item.product.type === GUITARS_DATA[1].nameType
                ? `cart-item--electro`
                : ``
            }`}
          >
            <CartProductItem productItem={item.product} count={item.count} />
          </li>
        ))}
      </ul>
      <div className="cart__footer cart-footer">
        <div className="cart-footer__wrapper">
          <h3>Промокод на скидку</h3>
          <label htmlFor="promo-code">
            Введите свой промокод, если он у вас есть.
          </label>
          {!isValidPromoCode && (
            <span className="cart-footer__error-msg">
              Промокод не действителен
            </span>
          )}
          <div className="cart-footer__promo-code">
            <input type="text" id="promo-code" ref={promoCodeRef}></input>
            <button
              type="button"
              className="cart-footer__apply-promo-code button button--gray"
              onClick={() => {
                PROMO_CODE.indexOf(promoCodeRef.current.value) !== -1
                  ? applyValidPromoCode(promoCodeRef.current.value)
                  : applyInalidPromoCode(promoCodeRef.current.value);
              }}
            >
              Применить купон
            </button>
          </div>
        </div>
        <div className="cart-footer__wrapper">
          <span className="cart-footer__total-sum">{`Всего: ${addSpacesAfterThreeCharacters(
            totalSum
          )} ₽ `}</span>
          <button
            type="button"
            className="cart-footer__checkout button button--orange"
          >
            Оформить заказ
          </button>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  itemsInTheCart: Object.values(state.APP_STATE.сart),
});

export { CartSection };
export default connect(mapStateToProps, null)(CartSection);
