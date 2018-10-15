import React from "react";
import { shallow } from "enzyme";

import { TotalScore } from "../TotalScore";

import { goalsData } from "../../data/goals";

describe("TotalScore", () => {
  it("has a valid snapshot", () => {
    const component = shallow(<TotalScore goals={goalsData} />);

    expect(component).toMatchSnapshot();
  });
});
