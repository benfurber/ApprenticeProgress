import { goalsReducer } from "redux-modules";

const initialState = {
  goals: {},
};

const rootReducer = (state = initialState, action) => {
  return goalsReducer(state, action);
};

export { rootReducer };
