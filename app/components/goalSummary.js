// @flow

import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import { Badge, Body, Card, CardItem, Text, H3 } from "native-base";

import type { GoalDetailsType, OnPressType } from "types";

type Props = { details: GoalDetailsType, onPress?: OnPressType };

class GoalSummary extends Component<Props> {
  onPress = () => {};

  render() {
    const details = this.props.details;
    const onPress = this.props.onPress || this.onPress;

    const score = details.score;
    const tag = details.tag;
    const title = details.title;

    return (
      <TouchableOpacity onPress={onPress}>
        <Card>
          <CardItem header>
            <H3>{title} ({score}/5)</H3>
          </CardItem>
          <CardItem>
            <Body>
              <Badge>
                <Text>{tag}</Text>
              </Badge>
            </Body>
          </CardItem>
        </Card>
      </TouchableOpacity>
    );
  }
}

export { GoalSummary };
