// @flow

import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Content, Form, Input, Item, Label, View } from "native-base";

import { FormLoginButton } from "components";
import { colours, standards } from "styles";
import type { navigationType, OnPressType } from "types";

type Props = {
  email: ?string,
  navigation: navigationType,
  onPress?: OnPressType,
  password: ?string,
};

class FormLogin extends Component<Props> {
  render() {
    const { email, navigation, password } = this.props;

    return (
      <Content>
        <View style={styles.content}>
          <Form>
            <Item style={styles.formField} floatingLabel>
              <Label>Email</Label>
              <Input />
            </Item>
            <Item style={styles.formField} floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
            <FormLoginButton
              email={email}
              password={password}
              navigation={navigation}
            />
          </Form>
        </View>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    paddingTop: 200,
  },
  formField: {
    backgroundColor: colours.transparentWhite,
    ...standards.elementPadding,
  },
});

export { FormLogin };
