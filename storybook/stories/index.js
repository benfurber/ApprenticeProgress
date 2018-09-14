import React from "react";

import { storiesOf } from "@storybook/react-native";

import Welcome from "./Welcome";
import { GoalSummary } from "../../app/components/GoalSummary";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome />
));

storiesOf("Components", module)
  .add("goalSummary", () => (
    <GoalSummary
      details={{
        description: "Hello world 1",
        title: "Testing title",
        tag: "Tag",
        score: 1,
      }}
    />
  ));
