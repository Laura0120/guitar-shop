import React from "react";
import PropTypes from "prop-types";

import { FUNCTION, NUMBER } from "../prop-type";

const Pagination = (props) => {
  const {
    visiblePages,
    currentPage,
    onChangePage,
    onClickBackButton,
    onClickNextButton,
    pages,
  } = props;

  const getPageElement = (item) => {
    return (
      <div key={item} className="pagination__item">
        <input
          type="radio"
          className="pagination__radio visually-hidden"
          id={`page-${item}`}
          value={item}
          checked={item === currentPage}
          onChange={onChangePage}
        />
        <label htmlFor={`page-${item}`}>{item}</label>
      </div>
    );
  };
  const getPages = (items) => {
    return (
      <React.Fragment>
        {items.slice(0, 2).map(getPageElement)}
        <div className="pagination__item">
          <svg
            width="8"
            height="2"
            viewBox="0 0 8 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.908 0.488V2H0.36V0.488H1.908ZM4.79316 0.488V2H3.24516V0.488H4.79316ZM7.67831 0.488V2H6.13031V0.488H7.67831Z"
              fill="black"
            />
          </svg>
        </div>
        {getPageElement(
          items.length > 7 ? currentPage + 6 : items[items.length - 1]
        )}
      </React.Fragment>
    );
  };
  return (
    <section className="catalog__pagination pagination">
      <h2 className="visually-hidden">Пагинация </h2>
      {currentPage > 1 ? (
        <button
          type="button"
          className="pagination__button"
          onClick={onClickBackButton}
        >
          Назад
        </button>
      ) : (
        ``
      )}
      <div className="pagination__wrapper">
        {visiblePages.length > 3
          ? getPages(visiblePages)
          : visiblePages.map(getPageElement)}
      </div>
      <button
        type="button"
        onClick={onClickNextButton}
        className="pagination__button"
        disabled={pages.length === currentPage}
      >
        Далее
      </button>
    </section>
  );
};

Pagination.propTypes = {
  onClickNextButton: FUNCTION,
  onClickBackButton: FUNCTION,
  onChangePage: FUNCTION,
  pages: PropTypes.arrayOf(NUMBER),
  visiblePages: PropTypes.arrayOf(NUMBER),
  currentPage: NUMBER,
};

export default Pagination;
