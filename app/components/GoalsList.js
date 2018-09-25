// @flow

import React, { Component } from "react";
import { Container } from "native-base";

import { GoalSummary } from "components";
import type { GoalsDataType, navigationType } from "types";

type Props = { goals: GoalsDataType, navigation: navigationType };

class GoalsList extends Component<Props> {
  render() {
    const { goals } = this.props;
    const goalIds = Object.keys(goals);

    return (
      <Container>
        {goalIds.map(goalId => (
          <GoalSummary key={goalId} details={goals[goalId]} navigation={this.props.navigation} />
        ))}
      </Container>
    );
  }
}

export { GoalsList };
