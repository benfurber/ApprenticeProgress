// @flow

import React from "react";
import { AsyncStorage, StyleSheet } from "react-native";
import { graphql } from "react-apollo";
import { Button, Text, View } from "native-base";

import { loginMutation } from "queries";
import { colours } from "styles";

type Props = {
  email: string,
  mutate: any => any,
  password: string,
};

const FormLoginButtonUnwrapped = (props: Props) => {
  const { email, mutate, password } = props;

  return (
    <View style={styles.formField}>
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
        <Text>Login</Text>
      </Button>
    </View>
  );
};

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

const FormLoginButton = graphql(loginMutation, {
  options: () => ({
    onCompleted: data => {
      const token = data.loginUser.user.authenticationToken;
      AsyncStorage.setItem("token", token);
    },
  }),
})(FormLoginButtonUnwrapped);

export { FormLoginButton, FormLoginButtonUnwrapped };
