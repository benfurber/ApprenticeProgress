import { goalsReducer } from "redux-modules";

const initialState = {};

const rootReducer = (state = initialState, action) => {
  return goalsReducer(state, action);
};

export { rootReducer };
