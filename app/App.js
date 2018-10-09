// @flow

import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";
import { Provider } from "react-redux";

import store from "redux-store";
import { ConnectedFeed, Goal } from "screens";
import { colours } from "styles";

type Props = {};

const RootStack = createStackNavigator({
  Home: {
    screen: ConnectedFeed,
  },
  Goal: {
    screen: Goal,
  },
}, {
  navigationOptions: {
    headerStyle: {
      backgroundColor: colours.red,
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
      fontSize: 26,
    },
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
