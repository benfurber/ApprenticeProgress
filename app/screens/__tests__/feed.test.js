// @flow

import React from "react";
import { shallow } from "enzyme";

import { goalsData } from "../../data/goals";
import { Feed } from "../Feed";
import { navigationMock } from "mocks";

describe("Feed", () => {
  it("has a valid snapshot", () => {
    const data = {
      goals: goalsData,
    };
    const component = shallow(<Feed navigation={navigationMock} data={data} />);

    expect(component).toMatchSnapshot();
  });
});
