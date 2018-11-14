// @flow

import React, { Component } from "react";

import { Background, Data, GoalsList } from "components";
import { goalsQuery } from "queries";
import type { navigationType } from "types";

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
        <Data
          presentData={data => (
            <GoalsList navigation={this.props.navigation} goals={data.goals} />
          )}
          query={goalsQuery}
        />
      </Background>
    );
  }
}

export { Feed };
