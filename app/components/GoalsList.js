// @flow

import React, { Component } from "react";
import { Content } from "native-base";

import { GoalSummary } from "components";
import type { GoalsDataType, navigationType } from "types";
import { orderByTitle } from "utils";

type Props = { goals: GoalsDataType, navigation: navigationType };

class GoalsList extends Component<Props> {
  render() {
    let { goals } = this.props;
    goals = orderByTitle(goals);

    return (
      <Content>
        {goals.map(goal => (
          <GoalSummary
            key={goal.id}
            details={goal}
            navigation={this.props.navigation}
          />
        ))}
      </Content>
    );
  };
};

export { GoalsList };
