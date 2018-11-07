// @flow

import React from "react";
import { shallow } from "enzyme";

import { FormLogin } from "../FormLogin";

describe("Loading", () => {
  it("has a valid snapshot", () => {
    const component = shallow(<FormLogin />);

    expect(component).toMatchSnapshot();
  });
});
