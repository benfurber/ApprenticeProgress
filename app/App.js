// @flow

import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";
import { Provider } from "react-redux";

import store from "redux-store";
import { Feed, Goal } from "screens";

type Props = {};

const RootStack = createStackNavigator({
  Home: {
    screen: Feed,
  },
  Goal: {
    screen: Goal,
  },
});


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
