// @flow

import React, { Component } from "react";
import { Button, Content, Text } from "native-base";

import type { navigationType, OnPressType } from "types";

type Props = {
  navigation: navigationType,
  onPress?: OnPressType,
};

const handlePress = (destination, navigation, options = {}) => () => {
  navigation.navigate(destination, options);
};

class FormLogin extends Component<Props> {
  render() {
    const { navigation } = this.props;
    const onPress = this.props.onPress || handlePress("Main", navigation);

    return (
      <Content>
        <Text>Login Field</Text>
        <Button onPress={onPress}>
          <Text>Login</Text>
        </Button>
      </Content>
    );
  }
}

export { FormLogin };
