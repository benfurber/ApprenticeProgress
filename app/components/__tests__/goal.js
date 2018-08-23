import "react-native";
import React from "react";
import { Goal } from "components";

import renderer from "react-test-renderer";

const testData = {
  title: "test title",
};

describe("Goal", () => {
  it("renders sucessfully", () => {
    renderer.create(<Goal data={testData} />);
  });
});
