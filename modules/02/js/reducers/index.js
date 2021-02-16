import { BURN, REST } from "../actions/index.js";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case BURN:
      return {
        ...state,
        calories: state.calories + payload,
      };
    case REST:
      return {
        ...state,
        clicksDinner: state.clicksDinner === 0 ? 0 : --state.clicksDinner,
      };
    default:
      return state;
  }
};

export default reducer;
