import { combineReducers } from "redux";
import appState from "./app-state";
import filterState from "./filter-state";
import sortState from "./sort-state";

export const NameSpace = {
  APP_STATE: `APP_STATE`,
  FILTER_STATE: `FILTER_STATE`,
  SORT_STATE: `SORT_STATE`,
};

export default combineReducers({
  [NameSpace.APP_STATE]: appState,
  [NameSpace.FILTER_STATE]: filterState,
  [NameSpace.SORT_STATE]: sortState,
});
