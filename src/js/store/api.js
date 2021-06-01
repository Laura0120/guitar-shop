import { CATALOG } from "../const.js";

export const getProducts = (parameters) => {
  const { filtersState, sortState } = parameters;

  const filterItem = (item) => {
    if (filtersState.minPrice && item.price < filtersState.minPrice) {
      return false;
    }
    if (filtersState.maxPrice && item.price > filtersState.maxPrice) {
      return false;
    }

    if (!filtersState.typesChecked[item.type]) {
      return false;
    }
    if (!filtersState.quantityStringsChecked[item.countStrings].checked) {
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
