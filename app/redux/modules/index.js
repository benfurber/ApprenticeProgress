import { goalsReducer } from "./goals";

const initialState = {};

export default (state = initialState, action) => {
  return ({
    goals: goalsReducer(state.goals, action),
  });
};
