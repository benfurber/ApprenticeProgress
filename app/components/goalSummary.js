// @flow

import React, { Component } from "react";
import {
  Body,
  Card,
  CardItem,
  Text,
} from "native-base";

type Props = {
  data: any,
};

class GoalSummary extends Component<Props> {
  render() {
    const data = this.props.data;

    const description = data.description;
    const title = data.title;

    return (
      <Card>
        <CardItem header>
          <Text>{title}</Text>
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
