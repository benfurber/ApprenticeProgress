import "react-native";
import React from "react";
import App from "../App";

import renderer from "react-test-renderer";

describe("App", () => {
  it("renders correctly", () => {
    const component = renderer.create(<App />);

    expect(component).toBeTruthy();
  });
});


