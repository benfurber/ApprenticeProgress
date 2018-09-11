import React, { Component } from "react";
import { Container, Header, Text } from "native-base";

import { GoalSummary } from "../components/GoalSummary";

class Feed extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Text>ApprenticeProgress</Text>
        </Header>
        <GoalSummary
          data={{ title: "Hello", description: "Hello world", tag: "One" }}
        />
      </Container>
    );
  }
}

export { Feed };
