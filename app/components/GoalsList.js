// @flow

import React, { Component } from "react";
import { Container } from "native-base";

import { GoalSummary } from "components";
import type { GoalsDataType } from "types";

type Props = { goals: GoalsDataType };

class GoalsList extends Component<Props> {
  render() {
    const { goals } = this.props;
    const goalIds = Object.keys(goals);

    return (
      <Container>
        {goalIds.map(goalId => (
          <GoalSummary goalId={goalId} details={goals[goalId]} />
        ))}
      </Container>
    );
  }
}

export { GoalsList };
