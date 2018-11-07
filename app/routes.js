import React from "react";
import {
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator,
} from "react-navigation";

import { IconButton } from "components";
import { FeedWrapper, Goal, Login, Goal, ProgressWrapper } from "screens";
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

const AuthenticationNavigator = createStackNavigator({
  Login: {
    screen: Login,
  },
});

const GoalsNavigator = createStackNavigator(
  {
    Home: {
      screen: FeedWrapper,
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
      screen: ProgressWrapper,
    },
  },
  stackConfig
);

const MainNavigator = createBottomTabNavigator(
  {
    Goals: GoalsNavigator,
    Progress: ProgressNavigator,
  },
  tabConfig
);

const RootStack = createSwitchNavigator({
  Authentication: AuthenticationNavigator,
  Main: MainNavigator,
});

export { RootStack };
