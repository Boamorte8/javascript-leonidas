import store from "./store.js";
import { BURN, REST } from "./actions/index.js";

const printNeededClicks = () => {
  window.clicks.textContent = `Para quemar una pizza y una coca necesitas ${
    store.getState().clicksDinner
  } clicks`;
};

printNeededClicks();

store.subscribe(() => {
  printNeededClicks();
  window.result.textContent = `Haz quemado ${
    store.getState().calories
  } calorías`;
});

const burn = () => {
  store.dispatch({
    type: BURN,
    payload: 1.42,
  });
  store.dispatch({
    type: REST,
  });
};

window.burn.addEventListener("click", burn);
