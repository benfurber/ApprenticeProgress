import { rootReducer } from "../root";

describe("rootReducer", () => {
  it("returns the goalReducer", () => {
    const state = {};
    const action = { type: "empty/action" };

    const reducer = rootReducer(state, action);

    expect(reducer).toEqual(state);
  });
});
