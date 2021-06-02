import PropTypes from "prop-types";
import { GUITARS_DATA, QUANTITY_STRINGS_OPTIONS } from "./const";

export const BOOLEAN = PropTypes.bool.isRequired;
export const FUNCTION = PropTypes.func.isRequired;
export const NUMBER = PropTypes.number.isRequired;
export const STRING = PropTypes.string.isRequired;

export const PRODUCT_ITEM = PropTypes.shape({
  vendorCode: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  nameType: PropTypes.string,
  popularity: PropTypes.number,
  countStrings: PropTypes.number,
  price: PropTypes.number,
  img: PropTypes.string,
  imgMin: PropTypes.string,
});

export const TYPES_CHECKED = PropTypes.shape({
  [GUITARS_DATA[0].type]: PropTypes.bool,
  [GUITARS_DATA[1].type]: PropTypes.bool,
  [GUITARS_DATA[2].type]: PropTypes.bool,
});

export const QUANTITY_STRINGS_CHECKED = PropTypes.shape({
  [QUANTITY_STRINGS_OPTIONS[0]]: PropTypes.shape({
    available: PropTypes.bool,
    checked: PropTypes.bool,
  }),
  [QUANTITY_STRINGS_OPTIONS[1]]: PropTypes.shape({
    available: PropTypes.bool,
    checked: PropTypes.bool,
  }),
  [QUANTITY_STRINGS_OPTIONS[2]]: PropTypes.shape({
    available: PropTypes.bool,
    checked: PropTypes.bool,
  }),
  [QUANTITY_STRINGS_OPTIONS[3]]: PropTypes.shape({
    available: PropTypes.bool,
    checked: PropTypes.bool,
  }),
});

export const FILTER_STATE = PropTypes.shape({
  minPrice: PropTypes.number,
  maxPrice: PropTypes.number,
  TYPES_CHECKED: TYPES_CHECKED,
  QUANTITY_STRINGS_CHECKED: QUANTITY_STRINGS_CHECKED,
});

export const TYPE_SORT = PropTypes.shape({
  price: PropTypes.bool,
  popularity: PropTypes.bool,
});
export const DIRECTION = PropTypes.shape({
  up: PropTypes.bool,
  down: PropTypes.bool,
});

export const SORT_STATE = PropTypes.shape({
  typeSort: TYPE_SORT,
  direction: DIRECTION,
});

export const PRODUCT_LiST = PropTypes.arrayOf(PRODUCT_ITEM).isRequired;
