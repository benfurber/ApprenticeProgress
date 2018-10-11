import { createStackNavigator, createBottomTabNavigator } from "react-navigation";

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
  }
);

export { RootStack };
