import gql from "graphql-tag";

import { client } from "utils";

const GET = "goals/get";

const addGoals = goals => ({
  type: GET,
  payload: goals,
});

const query = {
  query: gql`
    {
      goals {
        id
        actions
        description
        evidence
        score
        tag
        title
      }
    }
  `,
};

const fetchGoals = dispatch => {
  return client.query(query).then(result => {
    dispatch(addGoals(result.data.goals));
  });
};

const goalsReducer = (state, action) => {
  switch (action.type) {
    case GET:
      return { ...state, goals: action.payload };
    default:
      return state;
  }
};

export { addGoals, fetchGoals, goalsReducer };
