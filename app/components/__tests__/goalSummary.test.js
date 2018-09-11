import "react-native";
import React from "react";
import {shallow} from "enzyme";

import {GoalSummary} from "../goalSummary";

describe("goalSummary", () =>{
  it("Has a valid snapshot", () => {
    const component = shallow(<GoalSummary />);

    expect(component).toMatchSnapshot();
  });
});
