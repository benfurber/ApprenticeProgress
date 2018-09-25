// @flow

import React from "react";
import { shallow } from "enzyme";

import { Feed } from "../Feed";

describe("Feed", () => {
  it("renders correctly", () => {
    const component = shallow(<Feed navigation={jest.fn()} />);

    expect(component).toMatchSnapshot();
  });
});
