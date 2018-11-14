// @flow

import React, { Component } from "react";
import { StyleSheet, Text } from "react-native";
import { H2, View } from "native-base";

import { Background, Dot } from "components";
import { colours, standards } from "styles";

type Props = {
  condition: string,
};
class Pending extends Component<Props> {
  render() {
    const { condition } = this.props;

    return (
      <Background noRalph={true} style={styles.background}>
        {this._renderDots(condition)}
        {this._renderConditionText(condition)}
        <View style={styles.dotsView} />
      </Background>
    );
  }

  _renderDots(condition: string) {
    if (condition !== "Loading") {
      return <View style={styles.dotsView} />;
    }

    return (
      <View style={styles.dotsView}>
        <Dot delay={0} />
        <Dot delay={500} />
        <Dot delay={900} />
        <Dot delay={300} />
        <Dot delay={1200} />
      </View>
    );
  }

  _renderConditionText(condition: string) {
    if (condition === "Error") {
      return (
        <View style={styles.textView}>
          <H2 style={styles.redText}>{condition}</H2>
        </View>
      );
    }

    return (
      <View style={styles.textView}>
        <H2>{condition}</H2>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flexDirection: "column",
    alignItems: "center",
  },
  dotsView: {
    alignItems: "flex-end",
    flex: 4,
    flexDirection: "row",
    justifyContent: "center",
  },
  redText: {
    color: colours.red,
  },
  textView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    ...standards.elementPadding,
  },
});

export { Pending };
