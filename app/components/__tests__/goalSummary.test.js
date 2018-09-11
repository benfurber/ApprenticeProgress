import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { GoalSummary } from "../goalSummary";

describe("goalSummary", () => {
  it("Has a valid snapshot", () => {
    const data = {
      description: "Hello world",
      title: "Testing title",
    };
    const component = shallow(<GoalSummary data={data} />);

    expect(component).toMatchSnapshot();
  });
});
