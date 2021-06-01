import React from "react";

import CardProduct from "./card-product";
import { GUITARS_DATA } from "../const";

const CatalogSection = (props) => {
  const { productList, renderPagination } = props;

  return (
    <section className="page-content__catalog catalog">
      <h2 className="visually-hidden">Список товаров</h2>
      <ul className="catalog__list">
        {productList.map((item, i) => (
          <li
            key={i}
            className={`catalog__card-product card-product ${
              item.type === GUITARS_DATA[1].nameType
                ? `card-product--electro`
                : ``
            }`}
          >
            <CardProduct productItem={item} />
          </li>
        ))}
      </ul>
      {renderPagination()}
    </section>
  );
};

export default CatalogSection;
