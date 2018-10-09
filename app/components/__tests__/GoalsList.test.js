// @flow

import React from "react";
import { shallow } from "enzyme";

import { GoalsList } from "../GoalsList";
import { GoalSummary } from "../GoalSummary";
import navigationMock from "mocks";


describe("GoalsList", () => {
  it("has a valid snapshot", () => {
    const goals = [
      {
        id: 1,
        description: "Hello world 1",
        title: "Testing title",
        tag: "I'm team thoughtbot",
      },
    ];
    const component = shallow(<GoalsList goals={goals} navigation={navigationMock} />);

    expect(component).toMatchSnapshot();
  });
});
