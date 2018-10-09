import React from "react";
import { Text } from "react-native";
import { shallow } from "enzyme";

import { Background } from "../Background";

describe("Background", () => {
  it("has a valid snapshot", () => {
    const component = shallow(
      <Background>
        <Text>Hello</Text>
      </Background>
    );

    expect(component).toMatchSnapshot();
  });
});
