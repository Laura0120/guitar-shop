import { ActionType } from "../action";
import { extend } from "../../utils";
import { GUITARS_DATA, QUANTITY_STRINGS_OPTIONS } from "../../const";

const initialState = {
  minPrice: 0,
  maxPrice: 0,
  typesChecked: {
    [GUITARS_DATA[0].type]: true,
    [GUITARS_DATA[1].type]: true,
    [GUITARS_DATA[2].type]: true,
  },
  quantityStringsChecked: {
    [QUANTITY_STRINGS_OPTIONS[0]]: { available: true, checked: true },
    [QUANTITY_STRINGS_OPTIONS[1]]: { available: true, checked: true },
    [QUANTITY_STRINGS_OPTIONS[2]]: { available: true, checked: true },
    [QUANTITY_STRINGS_OPTIONS[3]]: { available: true, checked: true },
  },
};

const filterState = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_MIN_PRICE: {
      return extend(state, {
        minPrice: action.payload,
      });
    }
    case ActionType.SET_MAX_PRICE: {
      return extend(state, {
        maxPrice: action.payload,
      });
    }
    case ActionType.CHANGE_TYPES_CHECKED: {
      return extend(state, action.payload);
    }
    case ActionType.CHANGE_QUANTITY_STRINGS_CHECKED: {
      return extend(state, {
        quantityStringsChecked: {
          ...state.quantityStringsChecked,
          ...action.payload,
        },
      });
    }
    default: {
      return state;
    }
  }
};

export default filterState;
