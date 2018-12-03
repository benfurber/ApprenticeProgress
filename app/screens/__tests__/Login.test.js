// @flow

import React from "react";
import { shallow } from "enzyme";
import { AsyncStorage } from "react-native";

import { Login } from "../Login";
import { navigationMock } from "mocks";

describe("Login", () => {
  it("has a valid snapshot", async () => {
    await AsyncStorage.setItem("token", null);

    const screen = shallow(
      <Login
        email="ben@testing.com"
        password="L33tPassword"
        navigation={navigationMock}
      />
    );

    expect(screen).toMatchSnapshot();
  });
});
