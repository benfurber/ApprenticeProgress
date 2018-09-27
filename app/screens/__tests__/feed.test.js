// @flow

import React from "react";
import { shallow } from "enzyme";

import { Feed } from "../Feed";
import navigationMock from "mocks";

describe("Feed", () => {
  it("renders correctly", () => {
    const component = shallow(<Feed navigation={navigationMock} />);

    expect(component).toMatchSnapshot();
  });
});
