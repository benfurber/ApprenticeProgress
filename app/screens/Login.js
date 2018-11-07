// @flow

import React, { Component } from "react";
import { Content, Text } from "native-base";

import { Background } from "components";

type Props = {};

class Login extends Component<Props> {
  render() {
    return (
      <Background>
        <Content>
          <Text>Blank Login</Text>
        </Content>
      </Background>
    );
  }
}

export { Login };
