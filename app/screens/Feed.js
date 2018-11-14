// @flow

import React, { Component } from "react";

import { Background, GoalsList, Loading } from "components";

type Props = {
  navigation: navigationType,
};

class Feed extends Component<Props> {
  static navigationOptions = {
    title: "ApprenticeProgress",
  };

  render() {
    return (
      <Background>
      </Background>
    );
  }
}

export { Feed };
