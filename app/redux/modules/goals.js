import { goalsData } from "../../data/goals";

const GET = "goals/get";

const goalsAction = () => ({ type: GET });

const goalsReducer = (state, action) => {
  switch (action.type) {
    case GET:
      return { ...state, goals: goalsData };
    default:
      return state;
  }
};

export { goalsAction, goalsReducer };