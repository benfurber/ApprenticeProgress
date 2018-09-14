// @flow

import React from "react";
import { shallow } from "enzyme";

import { GoalsList } from "../GoalsList";
import { GoalSummary } from "../GoalSummary";

describe("GoalsList", () => {
  it("has a valid snapshot", () => {
    const goals = {
      [1]: {
        description: "Hello world 1",
        title: "Testing title",
        tag: "Tag",
      },
    };
    const component = shallow(<GoalsList goals={goals} />);

    expect(component).toMatchSnapshot();
  });

  it("renders the right number of GoalSummaries", () => {
    const goals = {
      [1]: {
        description: "Hello world 1",
        title: "Testing title",
        tag: "Tag",
      },
      [2]: {
        description: "Hello world 2",
        title: "Testing title",
        tag: "Tag",
      },
    };
    const component = shallow(<GoalsList goals={goals} />);

    expect(component.find(GoalSummary)).toHaveLength(2);
  });
});
