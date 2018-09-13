import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { GoalSummary } from "../GoalSummary";

describe("goalSummary", () => {
  it("has a valid snapshot", () => {
    const goalDetails = {
      description: "Hello world",
      title: "Testing title",
      tag: "One",
    };
    const component = shallow(<GoalSummary details={goalDetails} />);

    expect(component).toMatchSnapshot();
  });

  it("reacts onPress", () => {
    const onPressMock = jest.fn();
    const goalDetails = {
      description: "Hello world",
      title: "Testing title",
      tag: "One",
    };
    const component = shallow(<GoalSummary details={goalDetails} onPress={onPressMock} />);

    component.simulate("press");

    expect(onPressMock).toHaveBeenCalled();
  });
});
