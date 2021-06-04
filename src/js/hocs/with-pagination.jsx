import React, { useState, useEffect } from "react";

import { PaginationData } from "../const";
import Pagination from "../components/pagination";

const withPagination = (Component) => {
  const WithPagination = (props) => {
    const { productList } = props;
    const [pages, setPages] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [renderedCardCount, setRenderedCardCount] = useState(
      PaginationData.COUNT_CARDS_ON_PAGES
    );

    useEffect(() => {
      const pageCount = Math.ceil(
        productList.length / PaginationData.COUNT_CARDS_ON_PAGES
      );
      const pageCountArray = [...Array(pageCount + 1).keys()].slice(1);
      setPages(pageCountArray);
      setCurrentPage(1);
    }, [productList]);

    useEffect(() => {
      setRenderedCardCount(currentPage * PaginationData.COUNT_CARDS_ON_PAGES);
    }, [currentPage]);

    const visiblePages =
      pages.slice(pages.indexOf(currentPage)).length >
      PaginationData.MIN_VISIBLE_PAGES
        ? pages.slice(pages.indexOf(currentPage))
        : pages.slice(pages.length - PaginationData.MIN_VISIBLE_PAGES);

    const onClickNextButton = () => {
      if (currentPage < pages.length) {
        return setCurrentPage(currentPage + 1);
      }
      return setCurrentPage(currentPage);
    };

    return (
      <Component
        {...props}
        productList={productList.slice(
          renderedCardCount - PaginationData.COUNT_CARDS_ON_PAGES,
          renderedCardCount
        )}
        renderPagination={() => {
          return (
            <Pagination
              visiblePages={visiblePages}
              pages={pages}
              currentPage={currentPage}
              onChangePage={(evt) => setCurrentPage(Number(evt.target.value))}
              onClickBackButton={() => setCurrentPage(currentPage - 1)}
              onClickNextButton={onClickNextButton}
            />
          );
        }}
      />
    );
  };

  return WithPagination;
};

export default withPagination;
