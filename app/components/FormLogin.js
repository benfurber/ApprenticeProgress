// @flow

import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Content, Form, Input, Item, Label, View } from "native-base";

import { FormLoginButton } from "components";
import { colours, standards } from "styles";
import type { EmailType, navigationType, PasswordType } from "types";
import { presentError } from "utils";

type Props = {
  navigation: navigationType,
};

type State = {
  email: EmailType,
  password: PasswordType,
  error: ?String,
  isLoading: boolean,
};

class FormLogin extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      error: null,
      isLoading: false,
    };
  }

  componentDidUpdate(_, prevState) {
    const { error } = this.state;

    if (error !== prevState.error) {
      return presentError({ error });
    }
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
                autoCapitalize="none"
                textContentType="emailAddress"
                onChangeText={email => this.setState({ email })}
                value={this.state.email}
              />
            </Item>
            <Item style={styles.formField} floatingLabel>
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
              addError={error => this.setState({ error })}
              setLoadingState={boolean => this.setLoadingState(boolean)}
              isLoading={() => this.isLoading()}
            />
          </Form>
        </View>
      </Content>
    );
  }

  setLoadingState(boolean) {
    this.setState({ isLoading: boolean });
  }

  isLoading() {
    return this.state.isLoading;
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
