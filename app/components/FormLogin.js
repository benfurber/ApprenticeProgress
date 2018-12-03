// @flow

import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Content, Form, Input, Item, Label, View } from "native-base";

import { FormLoginButton } from "components";
import { colours, standards } from "styles";
import type { EmailType, navigationType, PasswordType } from "types";

type Props = {
  navigation: navigationType,
};

type State = {
  email: EmailType,
  password: PasswordType,
};

class FormLogin extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      email: null,
      password: null,
    };
  }

  render() {
    const { navigation } = this.props;
    const { email, password } = this.state;

    return (
      <Content>
        <View style={styles.content}>
          <Form>
            <Item style={styles.formField} floatingLabel>
              <Label>Email</Label>
              <Input
                textContentType="emailAddress"
                onChangeText={email => this.setState({ email })}
                value={this.state.email}
              />
            </Item>
            <Item style={styles.formField} floatingLabel last>
              <Label>Password</Label>
              <Input
                secureTextEntry={true}
                onChangeText={password => this.setState({ password })}
                value={this.state.password}
              />
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
