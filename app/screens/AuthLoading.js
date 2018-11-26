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
