import { goalsData } from "../../data/goals";

const GET = "goals/get";

const goalsAction = () => ({ type: GET });

const INITIAL_STATE = { [0]: "not hello" };

const goalsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET:
      return { ...state, goals: goalsData };
    default:
      return state;
  }
};

export { goalsAction, goalsReducer };