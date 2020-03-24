import { FETCHING, SUCCESS, ERROR } from "../types/action-types";

export const initialState = {
  status: null,
  response: null
};

const reducer = (state = initialState, { type, response } = {}) => {
  switch (type) {
    case FETCHING:
      return { ...initialState, status: FETCHING };
    case SUCCESS:
      return { ...state, status: SUCCESS, response };
    case ERROR:
      return { ...state, status: ERROR, response };
    default:
      return state;
  }
};

export default reducer;
