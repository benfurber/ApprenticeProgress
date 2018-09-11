import React, { Component } from "react";
import { Container } from "native-base";

import { GoalSummary } from "./GoalSummary";

class GoalsList extends Component {
  goals = this.props.goals;

  renderGoal = (goal, goalId) => {
    return <GoalSummary key={goalId} data={goal} />;
  };

  renderGoals = () => {
    const goalData = Object.keys(this.goals);

    return goalData.map(goalId => {
      return this.renderGoal(this.goals[goalId], goalId);
    });
  };

  render() {
    return <Container>{this.renderGoals()}</Container>;
  }
}

export { GoalsList };
