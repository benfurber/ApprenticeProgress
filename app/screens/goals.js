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
      "title": "I contribute to thoughtbot being a good place to work",
      "tags": "Team thoughtbot",
      "score": 1,
      "actions": [
        "1",
        "2",
      ],
    },
    {
      "title": "I iterate over my existing knowledge effectively",
      "tags": "Team thoughtbot",
      "score": 2,
      "actions": [
        "1",
        "2",
      ],
    },
    {
      "title": "I’m a great pair programmer",
      "tags": "Team thoughtbot",
      "score": 3,
      "actions": [
        "1",
        "2",
      ],
    },
    {
      "title": "I help others become better ",
      "tags": "Team thoughtbot",
      "score": 1,
      "actions": [
        "1",
        "2",
      ],
    },
    {
      "title": "I’m passionate about software/products",
      "tags": "Team thoughtbot",
      "score": 3,
      "actions": [
        "1",
        "2",
      ],
    },
    {
      "title": "I set my own direction",
      "tags": "Team thoughtbot",
      "score": 4,
      "actions": [
        "1",
        "2",
      ],
    },
  ],
};
