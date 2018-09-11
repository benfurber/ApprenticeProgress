import React, { Component } from "react";
import { Container, Header, H1 } from "native-base";

import { GoalsList } from "../components/GoalsList";

class Feed extends Component {
  render() {
    return (
      <Container>
        <Header>
          <H1>ApprenticeProgress</H1>
        </Header>
        <GoalsList
          goals={{ 1: { title: "Hello", description: "Hello world", tag: "One" } }}
        />

      </Container>
    );
  }
}

export { Feed };
