// @flow

import React, { Component } from "react";
import { Content } from "native-base";

import { GoalSummary } from "components";
import type { GoalsDataType, navigationType } from "types";
import { orderIDsByTitle } from "utils";

type Props = { goals: GoalsDataType, navigation: navigationType };

class GoalsList extends Component<Props> {
  render() {
    const { goals } = this.props;
    const goalIds = orderIDsByTitle(goals);

    return (
      <Content>
        {goalIds.map(goalId => (
          <GoalSummary
            key={goalId}
            details={goals[goalId]}
            navigation={this.props.navigation}
          />
        ))}
      </Content>
    );
  };
};

export { GoalsList };
