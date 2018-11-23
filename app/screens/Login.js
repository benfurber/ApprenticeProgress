// @flow

import React, { Component } from "react";
import { Content } from "native-base";

import { Background, FormLogin } from "components";
import type { navigationType } from "types";

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

  render() {
    const { navigation } = this.props;

    return (
      <Background>
        <Content>
          <FormLogin
            navigation={navigation}
            email="ben@fu.rber.io"
            password="SECURE1234"
          />
        </Content>
      </Background>
    );
  }
}

export { Login };
