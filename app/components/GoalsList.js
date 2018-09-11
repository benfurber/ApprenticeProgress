import React, { Component } from "react";
import { Container, Text } from "native-base";

import { GoalSummary } from "./GoalSummary";

class GoalsList extends Component {
  goals = this.props.goals;

  renderGoal = (goal, index) => {
    return (
      <GoalSummary
        key={index}
        data={{
          title: goal.title,
          description: goal.description,
          tag: goal.tag,
        }}
      />
    );
  };

  renderGoals = () => {
    return Object.values(this.goals).map((goal, index) => {
      const goalData = {
        description: goal.description,
        title: goal.title,
        tag: goal.tag,
      };
      return this.renderGoal(goalData, index);
    });
  };

  render() {
    return <Container>{this.renderGoals()}</Container>;
  }
}

export { GoalsList };
