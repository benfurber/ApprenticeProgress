// @flow

import React from "react";
import { shallow } from "enzyme";

import { Goal } from "../Goal";

describe("Goal", () => {
  it("has a valid snapshot", () => {
    const details = {
      actions: ["1", "2"],
      description: "Words here about a goal",
      score: 4,
      tag: "Team thoughtbot",
      title: "I set my own direction",
    };

    const screen = shallow(<Goal details={details} />);

    expect(screen).toMatchSnapshot();
  });
});