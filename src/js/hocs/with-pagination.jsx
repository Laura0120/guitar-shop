import React, { useState, useEffect } from "react";

import { COUNT_CARDS_ON_PAGES } from "../const";
import Pagination from "../components/pagination";

const withPagination = (Component) => {
  const WithPagination = (props) => {
    const { productList } = props;
    const [pages, setPages] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [renderedCardCount, setRenderedCardCount] = useState(
      COUNT_CARDS_ON_PAGES
    );

    useEffect(() => {
      const pageCount = Math.ceil(productList.length / COUNT_CARDS_ON_PAGES);
      const pageCountArray = new Array(pageCount)
        .join()
        .split(",")
        .map(function (item, index) {
          return ++index;
        });
      setPages(pageCountArray);
    }, [productList]);

    useEffect(() => {
      setRenderedCardCount(currentPage * COUNT_CARDS_ON_PAGES);
    }, [currentPage]);

    const visiblePages =
      pages.slice(pages.indexOf(currentPage)).length > 3
        ? pages.slice(pages.indexOf(currentPage))
        : pages.slice(pages.length - 3);

    const onClickNextButton = () => {
      if (currentPage < pages.length) {
        return setCurrentPage(currentPage + 1);
      } else {
        return setCurrentPage(currentPage);
      }
    };

    return (
      <Component
        {...props}
        productList={productList.slice(
          renderedCardCount - COUNT_CARDS_ON_PAGES,
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
