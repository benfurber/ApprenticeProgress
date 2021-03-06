// @flow

import React from "react";
import { shallow } from "enzyme";

import { GoalSummary } from "../GoalSummary";
import { navigationMock } from "mocks";

import { goalsData } from "../../data/goals";

describe("goalSummary", () => {
  it("has a valid snapshot", () => {
    const component = shallow(
      <GoalSummary details={goalsData[0]} navigation={navigationMock} />
    );

    expect(component).toMatchSnapshot();
  });
});
