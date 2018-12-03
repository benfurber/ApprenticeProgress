// @flow

import React, { Component } from "react";
import { AsyncStorage } from "react-native";

import { Pending } from "components";
import type { EmailType, navigationType, PasswordType } from "types";

type Props = {
  navigation: navigationType,
  email: EmailType,
  password: PasswordType,
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

  async asyncLogin() {
    const { navigation } = this.props;

    const token = await AsyncStorage.getItem("token");

    const routeName = token ? "Main" : "Login";
    navigation.navigate(routeName, {});
  }

  render() {
    return <Pending condition="Loading" />;
  }
}

export { AuthLoading };
