// @flow

import React from "react";
import { shallow } from "enzyme";

import { RankGoals } from "../RankGoals";

import { goalsData } from "../../data/goals";

describe("RankGoals", () => {
  it("has a valid snapshot", () => {
    const component = shallow(<RankGoals goals={goalsData} />);

    expect(component).toMatchSnapshot();
  });
});
