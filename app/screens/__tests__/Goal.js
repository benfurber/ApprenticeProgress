// @flow

import React from "react";
import { shallow } from "enzyme";

import { Goal } from "../Goal";

describe("Goal", () => {
  it("has a valid snapshot", () => {
    const params = {
      details: {
        id: 1,
        actions: ["1", "2"],
        description: "Words here about a goal",
        evidence: [],
        score: 4,
        tag: "Team thoughtbot",
        title: "I set my own direction",
      },
    };
    const getParam = string => params[string];

    const navigation = {
      getParam,
      navigate: jest.fn(),
    };

    const screen = shallow(<Goal navigation={navigation} />);

    expect(screen).toMatchSnapshot();
  });
});
