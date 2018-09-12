// @flow

import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import { Badge, Body, Card, CardItem, Text, H3 } from "native-base";
import type { GoalDetailsType, OnPressType } from "../types";

type Props = { details: GoalDetailsType, onPress?: OnPressType };

class GoalSummary extends Component<Props> {
  onPress = () => {};

  render() {
    const details = this.props.details;
    const onPress = this.props.onPress || this.onPress;

    const description = details.description;
    const tag = details.tag;
    const title = details.title;

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
