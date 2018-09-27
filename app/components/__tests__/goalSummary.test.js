// @flow

import React from "react";
import { shallow } from "enzyme";

import { GoalSummary } from "../GoalSummary";
import navigationMock from "mocks";

describe("goalSummary", () => {
  it("has a valid snapshot", () => {
    const goalDetails = {
      actions: [],
      description: "Hello world",
      score: 0,
      title: "Testing title",
      tag: "One",
    };
    const component = shallow(<GoalSummary details={goalDetails} navigation={navigationMock} />);

    expect(component).toMatchSnapshot();
  });

  it("reacts onPress", () => {
    const onPressMock = jest.fn();
    const goalDetails = {
      actions: [],
      description: "Hello world",
      score: 0,
      title: "Testing title",
      tag: "One",
    };
    const component = shallow(<GoalSummary details={goalDetails} navigation={navigationMock} onPress={onPressMock} />);

    component.simulate("press");

    expect(onPressMock).toHaveBeenCalled();
  });
});
