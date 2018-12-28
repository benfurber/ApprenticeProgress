// @flow

import React, { Component } from "react";
import { Root } from "native-base";
import { RootStack } from "./routes";

import { ApolloProvider } from "react-apollo";
import { client } from "utils";

type Props = {};

class App extends Component<Props> {
  render() {
    return (
      <ApolloProvider client={client}>
        <Root>
          <RootStack />
        </Root>
      </ApolloProvider>
    );
  }
}

export { App };
