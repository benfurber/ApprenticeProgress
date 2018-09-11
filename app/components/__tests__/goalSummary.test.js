import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { GoalSummary } from "../GoalSummary";

describe("goalSummary", () => {
  it("has a valid snapshot", () => {
    const data = {
      description: "Hello world",
      title: "Testing title",
      tag: "One",
    };
    const component = shallow(<GoalSummary data={data} />);

    expect(component).toMatchSnapshot();
  });

  it("reacts onPress", () => {
    const onPressMock = jest.fn();
    
    const data = {
      description: "Hello world",
      title: "Testing title",
      tag: "One",
    };
    const component = shallow(<GoalSummary data={data} onPress={onPressMock} />);

    component.simulate("press");

    expect(onPressMock).toHaveBeenCalled();
  });
});
