import React from "react";
import { AsyncStorage, StyleSheet } from "react-native";
import { graphql } from "react-apollo";
import { Button, Text, View } from "native-base";

import { loginMutation } from "queries";
import { colours } from "styles";
import { handlePress } from "utils";

const FormLoginButtonUnwrapped = props => {
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
