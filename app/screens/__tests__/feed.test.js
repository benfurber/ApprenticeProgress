// @flow

import React from "react";
import { shallow } from "enzyme";
import configureStore from "redux-mock-store";

import { Feed } from "../Feed";
import navigationMock from "mocks";

import { goalsData } from "../../data/goals";

describe("Feed", () => {
  it("renders correctly", () => {
    const state = {
      goals: goalsData,
    };

    const component = shallow(<Feed navigation={navigationMock} state={state} />);

    expect(component).toMatchSnapshot();
  });
});
