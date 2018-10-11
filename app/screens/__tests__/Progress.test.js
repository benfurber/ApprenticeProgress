import React from "react";
import { shallow } from "enzyme";

import { Progress } from "../Progress";

import { goalsData } from "../../data/goals";

describe("Progress", () => {
  it("has a valid snapshot", () => {
    const state = {
      goals: goalsData,
    };
    const screen = shallow(<Progress state={state} />);

    expect(screen).toMatchSnapshot();
  });
});
