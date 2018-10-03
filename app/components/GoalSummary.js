// @flow

import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import { Badge, Body, Card, CardItem, Text, H3 } from "native-base";

import type { GoalDetailsType, OnPressType, navigationType } from "types";

type Props = {
  details: GoalDetailsType,
  onPress?: OnPressType,
  navigation: navigationType,
};

const handlePress = (navigation, details) => () => {
  navigation.navigate("Goal", { details, title: details.title });
};

class GoalSummary extends Component<Props> {
  render() {
    const { details, navigation } = this.props;
    const onPress = this.props.onPress || handlePress(navigation, details);

    const { score, tag, title } = details;

    return (
      <TouchableOpacity onPress={onPress}>
        <Card>
          <CardItem header>
            <H3>
              {title} ({score}
              /5)
            </H3>
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
