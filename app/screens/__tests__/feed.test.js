// @flow

import React from "react";
import { shallow } from "enzyme";
import configureStore from "redux-mock-store";

import { Feed } from "../Feed";
import navigationMock from "mocks";

import { goalsData } from "../../data/goals";

const middlewares = [];
const mockStore = configureStore(middlewares);

describe("Feed", () => {
  it("renders correctly", () => {
    const store = mockStore({
      goals: goalsData,
    });

    const component = shallow(<Feed navigation={navigationMock} store={store} />);

    expect(component).toMatchSnapshot();
  });
});
