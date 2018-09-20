import React from "react";

import { storiesOf } from "@storybook/react-native";

import Welcome from "./Welcome";
import { GoalSummary } from "components";
import { Goal } from "screens";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome />
));

storiesOf("Screens", module)
  .add("Goal", () => (
    <Goal
      details={{
        actions: ["1", "2"],
        description: "",
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
  ));
