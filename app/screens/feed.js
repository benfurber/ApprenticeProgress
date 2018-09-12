import React, { Component } from "react";
import { Container, Header, H1 } from "native-base";

import { GoalsList } from "../components/GoalsList";

class Feed extends Component {
  render() {
    const goalsData = {
      1: {
        actions: ["1", "2"],
        description: "",
        score: 1,
        tag: "Team thoughtbot",
        title: "I contribute to thoughtbot being a good place to work",
      },
      2: {
        actions: ["1", "2"],
        description: "",
        score: 2,
        tag: "Team thoughtbot",
        title: "I iterate over my existing knowledge effectively",
      },
      3: {
        actions: ["1", "2"],
        description: "",
        score: 3,
        tag: "Team thoughtbot",
        title: "I’m a great pair programmer",
      },
      4: {
        actions: ["1", "2"],
        description: "",
        score: 1,
        tag: "Team thoughtbot",
        title: "I help others become better ",
      },
      5: {
        actions: ["1", "2"],
        description: "",
        score: 3,
        tag: "Team thoughtbot",
        title: "I’m passionate about software/products",
      },
      6: {
        actions: ["1", "2"],
        description: "",
        score: 4,
        tag: "Team thoughtbot",
        title: "I set my own direction",
      },
    };

    return (
      <Container>
        <Header>
          <H1>ApprenticeProgress</H1>
        </Header>
        <GoalsList goals={goalsData} />
      </Container>
    );
  }
}

export { Feed };
