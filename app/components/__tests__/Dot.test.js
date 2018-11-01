// @flow

import React from "react";
import { shallow } from "enzyme";

import { Dot } from "../Dot";

describe("Dot", () => {
  it("has a valid snapshot", () => {
    const component = shallow(<Dot delay={0} />);

    expect(component).toMatchSnapshot();
  });
});
