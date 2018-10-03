import { goalsReducer } from "redux-modules";

const initialState = {};

const rootReducer = (state = initialState, action) => {
  return ({
    goals: goalsReducer(state.goals, action),
  });
};

export { rootReducer };
