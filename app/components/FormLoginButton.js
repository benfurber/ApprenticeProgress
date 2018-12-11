import React, { Component } from "react";
import { AsyncStorage, StyleSheet } from "react-native";
import { graphql } from "react-apollo";
import { Button, Text, View } from "native-base";

import { loginMutation } from "queries";
import { colours } from "styles";
import { handlePress } from "utils";

const CONSTANTS = {
  login: "Login",
};

class FormLoginButtonUnwrapped extends Component {
  render() {
    return <View style={styles.formField}>{this.renderButton()}</View>;
  }

  renderButton() {
    const { email, password } = this.props;

    if (email && password) {
      return this.activeButton();
    }

    return this.disabledButton();
  }

  activeButton() {
    const { email, mutate, password } = this.props;

    return (
      <Button
        onPress={() => {
          mutate({
            variables: {
              email,
              password,
            },
          });
        }}
        style={styles.button}
      >
        <Text>{CONSTANTS.login}</Text>
      </Button>
    );
  }

  disabledButton() {
    return (
      <Button disabled>
        <Text>{CONSTANTS.login}</Text>
      </Button>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: colours.red,
  },
  formField: {
    paddingLeft: 15,
    paddingVertical: 10,
  },
});

const options = props => ({
  onCompleted: async data => {
    const token = data.loginUser.user.authenticationToken;
    await AsyncStorage.setItem("token", token);
    return handlePress("Main", props.navigation)();
  },
});

const FormLoginButton = graphql(loginMutation, { options })(
  FormLoginButtonUnwrapped
);

export { FormLoginButton, FormLoginButtonUnwrapped };
