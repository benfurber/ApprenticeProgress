import React from "react";
import { shallow } from "enzyme";

import { Progress } from "../Progress";

describe("Progress", () => {
  it("has a valid snapshot", () => {
    const screen = shallow(<Progress />);

    expect(screen).toMatchSnapshot();
  });
});
