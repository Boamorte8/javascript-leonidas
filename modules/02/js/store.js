import { createStore } from "./redux/index.js";
import reducer from "./reducers/index.js";

const store = createStore(reducer, {
  calories: 0,
  clicksDinner: 1360563,
});

export default store;
