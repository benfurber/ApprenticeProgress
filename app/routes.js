import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator,
} from "react-navigation";

import { IconButton } from "components";
import { ConnectedFeed, Goal, Progress } from "screens";
import { colours } from "styles";

const stackConfig = {
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
};

const pickIcon = (state, tintColor) => {
  const { routeName } = state;
  return <IconButton name={routeName} tint={tintColor} />;
};

const tabConfig = {
  navigationOptions: ({ navigation }) => {
    return {
      tabBarOptions: {
        showLabel: false,
      },
      tabBarIcon: ({ tintColor }) => pickIcon(navigation.state, tintColor),
    };
  },
};

const GoalsNavigator = createStackNavigator(
  {
    Home: {
      screen: ConnectedFeed,
    },
    Goal: {
      screen: Goal,
    },
  },
  stackConfig
);

const ProgressNavigator = createStackNavigator(
  {
    Progress: {
      screen: Progress,
    },
  },
  stackConfig
);

const RootStack = createBottomTabNavigator(
  {
    Goals: GoalsNavigator,
    Progress: ProgressNavigator,
  },
  tabConfig
);

export { RootStack };
