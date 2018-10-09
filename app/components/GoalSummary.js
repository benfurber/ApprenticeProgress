// @flow

import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { H3, View } from "native-base";

import { Tag } from "components";
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
      <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
        <View style={styles.card}>
          <H3 style={styles.header}>
            {title} ({score}
            /5)
          </H3>
          <Tag text={tag} />
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fffd",
    marginHorizontal: 10,
    marginTop: 10,
    padding: 20,
    borderRadius: 3,
    borderWidth: 2,
    borderColor: "#eeec",
  },
  header: {
    marginBottom: 10,
  },
});

export { GoalSummary };
