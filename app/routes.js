import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator,
} from "react-navigation";

import { IconButton } from "components";
import { ConnectedFeed, Goal, ConnectedProgress } from "screens";
import { colours } from "styles";

const stackConfig = {
  navigationOptions: {
    headerStyle: {
      backgroundColor: colours.red,
    },
    headerTintColor: colours.white,
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
        activeTintColor: colours.white,
        showLabel: false,
        style: {
          backgroundColor: colours.black,
        },
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
      screen: ConnectedProgress,
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
