import React, { Component } from "react";
import { Container } from "native-base";
import { Goal } from "components";

export class Goals extends Component {
  getGoals(goalsData) {
    return goalsData.goals.map((goal, index) => {
      return this.displayGoal(goal, index);
    });
  }

  displayGoal(goal, index) {
    return <Goal data={ goal } key={ index } />;
  }

  render() {
    return (
      <Container>
        { this.getGoals(goalsData) }
      </Container>
    );
  }
}

const goalsData = {
  goals: [
    {
      "title": "Goal 1",
      "description": "Desc",
    },
    {
      "title": "Goal 2",
      "description": "Desc",
    },
  ],
};
