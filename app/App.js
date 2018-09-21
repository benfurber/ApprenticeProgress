// @flow

import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";

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
    return <RootStack />;
  }
}

export { App };
