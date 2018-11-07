// @flow

import React from "react";
import { shallow } from "enzyme";

import { Login } from "../Login";

describe("Login", () => {
  it("has a valid snapshot", () => {
    const screen = shallow(<Login />);

    expect(screen).toMatchSnapshot();
  });
});
