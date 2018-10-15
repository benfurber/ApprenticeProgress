// @flow

import React from "react";
import { shallow } from "enzyme";

import { Feed } from "../Feed";
import navigationMock from "mocks";

import { goalsData } from "../../data/goals";

describe("Feed", () => {
  it("BEFORE goals have loaded, renders correctly", () => {
    const state = {
      goals: [],
    };

    const component = shallow(
      <Feed navigation={navigationMock} state={state} />
    );

    expect(component).toMatchSnapshot();
  });

  it("WHEN goals have loaded, renders correctly", () => {
    const state = {
      goals: goalsData,
    };

    const component = shallow(
      <Feed navigation={navigationMock} state={state} />
    );

    expect(component).toMatchSnapshot();
  });
});
