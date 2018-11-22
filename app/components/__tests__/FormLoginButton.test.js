// @flow

import React from "react";
import { shallow } from "enzyme";

import { Button } from "native-base";

import { FormLoginButtonUnwrapped } from "../FormLoginButton";

describe("Loading", () => {
  it("has a valid snapshot", () => {
    const mutateMock = () => jest.fn();
    const component = shallow(
      <FormLoginButtonUnwrapped
        mutate={mutateMock}
        email="test@test.com"
        password="WELLSECURE1"
      />
    );

    expect(component).toMatchSnapshot();
  });

  it("mutate calls the other props on press", () => {
    const mutateMock = jest.fn();
    const email = "test@test.com";
    const password = "WELLSECURE1";

    const component = shallow(
      <FormLoginButtonUnwrapped
        mutate={mutateMock}
        email={email}
        password={password}
      />
    );

    component.find(Button).simulate("press");

    expect(mutateMock).toHaveBeenCalledWith({ variables: { email, password } });
  });
});
