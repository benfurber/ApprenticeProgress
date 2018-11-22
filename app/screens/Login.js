// @flow

import React, { Component } from "react";
import { AsyncStorage } from "react-native";
import { Content } from "native-base";

import { Background, FormLogin } from "components";
import type { navigationType } from "types";
import { handlePress } from "utils";

type Props = {
  navigation: navigationType,
  email: ?string,
  password: ?string,
};

class Login extends Component<Props> {
  static navigationOptions = {
    header: null,
    title: "Login",
  };

  constructor(props: Props) {
    super(props);
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const { navigation } = this.props;

    const token = await AsyncStorage.getItem("token");

    if (token) {
      console.log(token);
      handlePress("Main", navigation)();
    }
  };

  render() {
    const { navigation } = this.props;

    return (
      <Background>
        <Content>
          <FormLogin navigation={navigation} />
        </Content>
      </Background>
    );
  }
}

export { Login };
