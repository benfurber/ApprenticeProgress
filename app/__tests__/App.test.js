import "react-native";
import React from "react";
import { shallow } from "enzyme";

import { App } from "../App";

describe("App", () => {
  it("renders correctly", () => {
    const component = shallow(<App />);

    expect(component).toMatchSnapshot();
  });
});
