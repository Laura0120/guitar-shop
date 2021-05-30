import { ActionType } from "../action";
import { extend } from "../../utils";

const initialState = {
  typeSort: { price: false, popularity: false },
  direction: { up: false, down: false },
};

const sortState = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_TYPE_SORT: {
      return extend(state, {
        typeSort: action.payload,
      });
    }
    case ActionType.CHANGE_DIRECTION_SORT:
      return extend(state, {
        direction: action.payload,
      });
    default:
      return state;
  }
};

export default sortState;
