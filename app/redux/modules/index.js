import { combineReducers } from "redux";

import goalsReducer from "./goals";

const appReducer = combineReducers({
  goalsReducer,
});

export default (state, action) => {
  return appReducer(state, action);
};
