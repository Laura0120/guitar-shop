import { CATALOG } from "../const.js";

export const getProducts = (parameters) => {
  const { filterState, sortState } = parameters;

  const filterItem = (item) => {
    if (filterState.minPrice && item.price < filterState.minPrice) {
      return false;
    }
    if (filterState.maxPrice && item.price > filterState.maxPrice) {
      return false;
    }

    if (!filterState.typesChecked[item.type]) {
      return false;
    }
    if (!filterState.quantityStringsChecked[item.countStrings].checked) {
      return false;
    }
    return true;
  };

  const filteredCatalog = CATALOG.filter(filterItem);

  if (sortState.typeSort.price) {
    return sortState.direction.up
      ? filteredCatalog.sort((a, b) => a.price - b.price)
      : filteredCatalog.sort((a, b) => b.price - a.price);
  }

  if (sortState.typeSort.popularity) {
    return sortState.direction.up
      ? filteredCatalog.sort((a, b) => a.popularity - b.popularity)
      : filteredCatalog.sort((a, b) => b.popularity - a.popularity);
  }

  return filteredCatalog;
};
