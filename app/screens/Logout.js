// @flow

import React, { Component } from "react";
import { AsyncStorage } from "react-native";

import { Pending } from "components";
import type { navigationType } from "types";
import { handlePress } from "utils";

type Props = {
  navigation: navigationType,
};

class Logout extends Component<Props> {
  componentDidMount() {
    const { navigation } = this.props;
    const clearToken = () => AsyncStorage.removeItem("token");

    const redirectToLogin = () => handlePress("Login", navigation)();

    const logUserOut = async () => {
      await clearToken();
      redirectToLogin();
    };

    return logUserOut();
  }

  render() {
    return <Pending condition="Loading" />;
  }
}

export { Logout };
