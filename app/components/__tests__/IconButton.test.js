import React from "react";
import { shallow } from "enzyme";

import { IconButton } from "../IconButton";

describe("IconButton", () => {
  it("has a valid snapshot", () => {
    const component = shallow(<IconButton name="Goals" />);

    expect(component).toMatchSnapshot();
  });
});
