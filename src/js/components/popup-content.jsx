import React from "react";
import { addSpacesAfterThreeCharacters } from "../utils";
import { PRODUCT_ITEM } from "../prop-type";

const PopupContent = (props) => {
  const { productItem } = props;
  const {
    vendorCode,
    name,
    nameType,
    countStrings,
    price,
    imgMin,
  } = productItem;

  return (
    <div className="popup__content">
      <div className="popup__image">
        <picture>
          <source type="image/webp" srcSet={`img/${imgMin}.webp`} />
          <img src={`img/${imgMin}.jpg`} width="53" height="128" alt={name} />
        </picture>
      </div>
      <div className="popup__data">
        <h3>{name}</h3>
        <p className="popup__vendor-code">{`Артикул: ${vendorCode}`}</p>
        <p className="popup__description">{`${nameType}, ${countStrings} струнная`}</p>
        <p className="popup__price">{`Цена: ${addSpacesAfterThreeCharacters(
          price
        )} ₽`}</p>
      </div>
    </div>
  );
};

PopupContent.propTypes = {
  productItem: PRODUCT_ITEM,
};

export default PopupContent;
