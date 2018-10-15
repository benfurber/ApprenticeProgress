// @flow

import React from "react";
import { shallow } from "enzyme";

import { IconButton } from "../IconButton";

describe("IconButton", () => {
  it("has a valid snapshot", () => {
    const component = shallow(<IconButton name="Goals" tint="#929292" />);

    expect(component).toMatchSnapshot();
  });
});
