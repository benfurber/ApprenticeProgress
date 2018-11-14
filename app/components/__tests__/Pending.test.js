// @flow

import React from "react";
import { shallow } from "enzyme";

import { Pending } from "../Pending";

describe("Loading", () => {
  it("has a valid snapshot when for loading", () => {
    const component = shallow(<Pending condition="Loading" />);

    expect(component).toMatchSnapshot();
  });

  it("has a valid snapshot when for an Error", () => {
    const component = shallow(<Pending condition="Error" />);

    expect(component).toMatchSnapshot();
  });
});
