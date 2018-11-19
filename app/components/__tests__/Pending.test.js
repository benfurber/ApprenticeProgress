// @flow

import React from "react";
import { shallow } from "enzyme";

import { Pending } from "../Pending";

describe("Pending", () => {
  it("has a valid snapshot when loading", () => {
    const component = shallow(<Pending condition="Loading" />);

    expect(component).toMatchSnapshot();
  });

  it("has a valid snapshot when an Error", () => {
    const component = shallow(
      <Pending
        condition="Error"
        errorMessage="Network error: Network request failed"
      />
    );

    expect(component).toMatchSnapshot();
  });
});
