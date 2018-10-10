import { addGoals, fetchGoals, goalsReducer } from "../goals";

describe("addGoals", () => {
  it("contains the correct data", () => {
    const goals = ["Test goal"];

    const expected = {
      type: "goals/get",
      payload: goals,
    };

    expect(addGoals(goals)).toEqual(expected);
  });
});

describe("fetchGoals", () => {
  it("calls the client", async() => {
    const goals = jest.fn();
    const dispatch = jest.fn(goals);

    await fetchGoals(dispatch);

    expect(goals).toHaveBeenCalled();
  });
});

describe("goalsReducer", () => {
  it("returns the initial state", () => {
    const state = null;
    const action = {};

    const reducer = goalsReducer(state, action);

    expect(reducer).toEqual(state);
  });

  it("addGoals returns the state with goalsData added", () => {
    const state = null;
    const payload = [{ goal: "testing" }];
    const action = {
      type: "goals/get",
      payload,
    };

    const reducer = goalsReducer(state, action);
    const expected = { goals: payload };

    expect(reducer).toEqual(expected);
  });
});
