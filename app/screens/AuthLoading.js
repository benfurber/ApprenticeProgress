// @flow

import React, { Component } from "react";
import { AsyncStorage } from "react-native";

import { Pending } from "components";
import type { navigationType } from "types";

type Props = {
  navigation: navigationType,
  email: ?string,
  password: ?string,
};

class AuthLoading extends Component<Props> {
  static navigationOptions = {
    header: null,
    title: "Login",
  };

  constructor(props: Props) {
    super(props);
    this.asyncLogin();
  }

  asyncLogin = async () => {
    const { navigation } = this.props;

    const token = await AsyncStorage.getItem("token");

    navigation.navigate(token ? "Main" : "Login", {});
  };

  render() {
    return <Pending condition="Loading" />;
  }
}

export { AuthLoading };
