import React from "react";

import { storiesOf } from "@storybook/react-native";
import { Container, Content } from "native-base";

import Welcome from "./Welcome";
import { GoalSummary, ProgressBar } from "components";
import { Goal } from "screens";

storiesOf("Currently working on", module).add("Goal", () => (
  <Goal
    details={{
      actions: ["1", "2"],
      description: "Words here about a goal",
      score: 4,
      tag: "Team thoughtbot",
      title: "I set my own direction",
    }}
  />
));

storiesOf("Welcome", module).add("to Storybook", () => <Welcome />);

storiesOf("Screens", module).add("Goal", () => (
  <Goal
    details={{
      actions: ["1", "2"],
      description: "Words here about a goal",
      score: 4,
      tag: "Team thoughtbot",
      title: "I set my own direction",
    }}
  />
));

storiesOf("Components", module)
  .add("GoalSummary", () => (
    <GoalSummary
      details={{
        description: "Hello world 1",
        title: "Testing title",
        tag: "Tag",
        score: 1,
      }}
    />
  ))
  .add("ProgressBar", () => (
    <Container>
      <Content>
        <ProgressBar score={0} />
        <ProgressBar score={1} />
        <ProgressBar score={2} />
        <ProgressBar score={3} />
        <ProgressBar score={4} />
        <ProgressBar score={5} />
      </Content>
    </Container>
  ));
