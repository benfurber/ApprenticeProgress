// @flow

import React, { Component } from "react";
import { StyleSheet } from "react-native";
import {
  Button,
  Content,
  Form,
  Input,
  Item,
  Label,
  Text,
  View,
} from "native-base";

import { colours, standards } from "styles";
import type { navigationType, OnPressType } from "types";
import { handlePress } from "utils";

type Props = {
  navigation: navigationType,
  onPress?: OnPressType,
};

class FormLogin extends Component<Props> {
  render() {
    const { navigation } = this.props;
    const onPress = this.props.onPress || handlePress("Main", navigation);

    return (
      <Content>
        <Form>
          <Item style={styles.formField} floatingLabel>
            <Label>Email</Label>
            <Input />
          </Item>
          <Item style={styles.formField} floatingLabel last>
            <Label>Password</Label>
            <Input />
          </Item>
        </Form>
        <View style={styles.buttonView}>
          <Button onPress={onPress} style={styles.button}>
            <Text>Login</Text>
          </Button>
        </View>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  formField: {
    backgroundColor: colours.transparentWhite,
    ...standards.elementPadding,
  },
  button: {
    backgroundColor: colours.red,
  },
  buttonView: {
    ...standards.elementPadding,
  },
});

export { FormLogin };
