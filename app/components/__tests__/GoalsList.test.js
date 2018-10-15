// @flow

import React from "react";
import { shallow } from "enzyme";

import { GoalsList } from "../GoalsList";
import navigationMock from "mocks";

import { goalsData } from "../../data/goals";

describe("GoalsList", () => {
  it("has a valid snapshot", () => {
    const component = shallow(
      <GoalsList goals={goalsData} navigation={navigationMock} />
    );

    expect(component).toMatchSnapshot();
  });
});
