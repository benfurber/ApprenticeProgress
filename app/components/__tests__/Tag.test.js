// @flow

import React from "react";
import { shallow } from "enzyme";

import { Tag } from "../Tag";

describe("Tag", () => {
  it("has a valid snapshot", () => {
    const component = shallow(<Tag text="I'm team thoughtbot" />);

    expect(component).toMatchSnapshot();
  });
});
