// @flow

import React, { Component } from "react";
import { Badge, Body, Card, CardItem, Text, H3 } from "native-base";
import type { GoalSummaryType } from "../types";

type Props = { data: GoalSummaryType };

class GoalSummary extends Component<Props> {
  render() {
    const data = this.props.data;

    const description = data.description;
    const tag = data.tag;
    const title = data.title;

    return (
      <Card>
        <CardItem header>
          <H3>{title}</H3>
          <Badge>
            <Text>{tag}</Text>
          </Badge>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{description}</Text>
          </Body>
        </CardItem>
      </Card>
    );
  }
}

export { GoalSummary };
