// @flow

import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import { Badge, Body, Card, CardItem, Text, H3 } from "native-base";
import type { GoalSummaryType, OnPressType } from "../types";

type Props = { data: GoalSummaryType, onPress?: OnPressType };

class GoalSummary extends Component<Props> {
  onPress = () => {};

  render() {
    const data = this.props.data;
    const onPress = this.props.onPress || this.onPress;

    const description = data.description;
    const tag = data.tag;
    const title = data.title;

    return (
      <TouchableOpacity onPress={onPress}>
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
      </TouchableOpacity>
    );
  }
}

export { GoalSummary };
