import { createStore } from "redux";

import rootReducer from "appRedux/modules";

const store = createStore(
  rootReducer
);

export default store;
