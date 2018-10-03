const GET = "goals/get";

export const get = () => ({ type: GET });

export const INITIAL_STATE = {
  value: "not hello",
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET:
      return { ...state, value: "Hello" };
    default:
      return state;
  }
};
