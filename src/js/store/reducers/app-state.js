import { ActionType } from "../action";
import { extend } from "../../utils";
import { CATALOG } from "../../const";

const initialState = {
  openProduct: null,
  сart: {},
  products: CATALOG,
  popupAddCartIsOpen: false,
  popupDeleteFromCartIsOpen: false,
  popupAddedSucessfullyIsOpen: false,
};

const appState = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_PRODUCTS: {
      return extend(state, {
        products: action.payload,
      });
    }
    case ActionType.TOGGLE_POPUP_ADD_CART_STATE: {
      return extend(state, {
        popupAddCartIsOpen: action.payload,
      });
    }
    case ActionType.TOGGLE_POPUP_DELETE_FROM_CART_STATE: {
      return extend(state, {
        popupDeleteFromCartIsOpen: action.payload,
      });
    }
    case ActionType.TOGGLE_POPUP_ADDED_SUCESSFULLY_STATE: {
      return extend(state, {
        popupAddedSucessfullyIsOpen: action.payload,
      });
    }
    case ActionType.ADD_TO_CART: {
      const updatedCart = { ...state.сart };
      updatedCart[action.payload.vendorCode] = updatedCart[
        action.payload.vendorCode
      ]
        ? {
            count: updatedCart[action.payload.vendorCode].count + 1,
            product: action.payload,
          }
        : { count: 1, product: action.payload };
      return extend(state, {
        сart: updatedCart,
      });
    }
    case ActionType.DELETE_FROM_CART: {
      const updatedCart = { ...state.сart };
      delete updatedCart[action.payload.vendorCode];
      return extend(state, {
        сart: updatedCart,
      });
    }
    case ActionType.REDUCE_IN_CART: {
      const updatedCart = { ...state.сart };
      updatedCart[action.payload.vendorCode] = {
        count: updatedCart[action.payload.vendorCode].count - 1,
        product: action.payload,
      };
      return extend(state, {
        сart: updatedCart,
      });
    }
    case ActionType.SET_OPEN_PRODUCT: {
      return extend(state, {
        openProduct: action.payload,
      });
    }
    default:
      return state;
  }
};

export default appState;
