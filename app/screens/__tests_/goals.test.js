import React from "react";
import { Goals } from "screens";

import renderer from "react-test-renderer";

describe("Goals", () => {
  it("renders without creashing", () => {
    const rendered = renderer.create(<Goals />).toJSON();
    expect(rendered).toBeTruthy();
  });
});
