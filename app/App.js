// @flow

import React, { Component } from "react";
import { Provider } from "react-redux";

import store from "redux-store";
import { RootStack } from "./routes";

type Props = {};

class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}

export { App };
