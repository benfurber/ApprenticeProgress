// @flow

import React from "react";
import { shallow } from "enzyme";

import { Goal } from "../goal";

describe("Goal", () => {
  it("has a valid snapshot", () => {
    const screen = shallow(<Goal />);

    expect(screen).toMatchSnapshot();
  });
});