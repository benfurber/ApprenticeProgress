// @flow

import React, { Component } from "react";
import { RootStack } from "./routes";

import { ApolloProvider } from "react-apollo";
import { client } from "utils";

type Props = {};

class App extends Component<Props> {
  render() {
    return (
      <ApolloProvider client={client}>
        <RootStack />
      </ApolloProvider>
    );
  }
}

export { App };
