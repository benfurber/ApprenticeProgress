// @flow

import React, { Component } from "react";
import { Content } from "native-base";

import { Background, FormLogin } from "components";
import type { navigationType } from "types";

type Props = {
  navigation: navigationType,
};

class Login extends Component<Props> {
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
