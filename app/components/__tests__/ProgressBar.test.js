// @flow

import React from "react";
import { shallow } from "enzyme";

import { ProgressBar } from "../ProgressBar";

describe("ProgressBar", () => {
  it("has a valid snapshot", () => {
    const screen = shallow(<ProgressBar score={2} />);

    expect(screen).toMatchSnapshot();
  });
});
