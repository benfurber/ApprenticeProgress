// @flow

import React from "react";
import { shallow } from "enzyme";

import navigationMock from "mocks";

import { FormLogin } from "../FormLogin";

describe("Loading", () => {
  it("has a valid snapshot", () => {
    const component = shallow(<FormLogin navigation={navigationMock} />);

    expect(component).toMatchSnapshot();
  });
});
