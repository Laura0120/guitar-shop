import { getProducts } from "./api";

const ActionType = {
  GET_PRODUCTS: "GET_PRODUCTS",
  REDIRECT_TO_ROUTE: "REDIRECT_TO_ROUTE",
  ADD_TO_CART: "ADD_TO_CART",
  REDUCE_IN_CART: "REDUCE_IN_CART",
  DELETE_FROM_CART: "DELETE_FROM_CART",
  SET_MIN_PRICE: "SET_MIN_PRICE",
  SET_MAX_PRICE: "SET_MAX_PRICE",
  SET_OPEN_PRODUCT: "SET_OPEN_PRODUCT",
  CHANGE_TYPES_CHECKED: "CHANGE_TYPES_CHECKED",
  CHANGE_QUANTITY_STRINGS_CHECKED: "CHANGE_QUANTITY_STRINGS_CHECKED",
  CHANGE_TYPE_SORT: "CHANGE_TYPE_SORT",
  CHANGE_DIRECTION_SORT: "CHANGE_DIRECTION_SORT",
  TOGGLE_POPUP_ADD_CART_STATE: "TOGGLE_POPUP_ADD_CART_STATE",
  TOGGLE_POPUP_DELETE_FROM_CART_STATE: "TOGGLE_POPUP_DELETE_FROM_CART_STATE",
  TOGGLE_POPUP_ADDED_SUCESSFULLY_STATE: "TOGGLE_POPUP_ADDED_SUCESSFULLY_STATE",
};

const ActionCreator = {
  getProducts: (value) => ({
    type: ActionType.GET_PRODUCTS,
    payload: getProducts(value),
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
  addToCart: (value) => ({
    type: ActionType.ADD_TO_CART,
    payload: value,
  }),
  deleteFromCart: (value) => ({
    type: ActionType.DELETE_FROM_CART,
    payload: value,
  }),
  reduceInCart: (value) => ({
    type: ActionType.REDUCE_IN_CART,
    payload: value,
  }),
  setMinPrice: (value) => ({
    type: ActionType.SET_MIN_PRICE,
    payload: value,
  }),
  setMaxPrice: (value) => ({
    type: ActionType.SET_MAX_PRICE,
    payload: value,
  }),
  setOpenProduct: (value) => ({
    type: ActionType.SET_OPEN_PRODUCT,
    payload: value,
  }),
  changeTypesChecked: (value) => ({
    type: ActionType.CHANGE_TYPES_CHECKED,
    payload: value,
  }),
  changeQuantityStringsChecked: (value) => ({
    type: ActionType.CHANGE_QUANTITY_STRINGS_CHECKED,
    payload: value,
  }),
  changeTypeSort: (value) => ({
    type: ActionType.CHANGE_TYPE_SORT,
    payload: value,
  }),
  changeDirectionSort: (value) => ({
    type: ActionType.CHANGE_DIRECTION_SORT,
    payload: value,
  }),
  togglePopupAddCartState: (value) => ({
    type: ActionType.TOGGLE_POPUP_ADD_CART_STATE,
    payload: value,
  }),
  togglePopupDeleteFromCartState: (value) => ({
    type: ActionType.TOGGLE_POPUP_DELETE_FROM_CART_STATE,
    payload: value,
  }),
  togglePopupAddedSucessfullyState: (value) => ({
    type: ActionType.TOGGLE_POPUP_ADDED_SUCESSFULLY_STATE,
    payload: value,
  }),
};

export { ActionType, ActionCreator };
