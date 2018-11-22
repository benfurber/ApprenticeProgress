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
  setEmail: string => any,
};

class FormLogin extends Component<Props> {
  render() {
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
              email="ben@fu.rber.io"
              password="temppasswordhere"
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
