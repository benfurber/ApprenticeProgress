import "react-native";
import React from "react";
import {shallow} from "enzyme";

import {Feed} from "../Feed";

describe("Feed", () => {
  it("renders correctly", () => {
    const component = shallow(<Feed />);

    expect(component).toMatchSnapshot();
  });
});


