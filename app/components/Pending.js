// @flow

import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { H2, View, Text } from "native-base";

import { Background, Dot } from "components";
import { colours, standards } from "styles";

type Props = {
  condition: string,
  errorMessage?: string,
};
class Pending extends Component<Props> {
  render() {
    return (
      <Background noRalph={true} style={styles.background}>
        {this._renderDots()}
        <View style={styles.textView}>{this._conditionInformation()}</View>
        <View style={styles.dotsView} />
      </Background>
    );
  }

  _renderDots() {
    const { condition } = this.props;

    if (condition === "Loading") {
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

    return <View style={styles.dotsView} />;
  }

  _conditionInformation() {
    const { condition, errorMessage } = this.props;

    if (condition === "Error") {
      return (
        <View style={styles.textView}>
          <H2 style={styles.redText}>{condition}</H2>
          <Text style={styles.centreText}>{errorMessage}</Text>
        </View>
      );
    }

    return <H2 style={styles.centreText}>{condition}</H2>;
  }
}

const styles = StyleSheet.create({
  background: {
    flexDirection: "column",
    alignItems: "center",
  },
  centreText: { textAlign: "center" },
  dotsView: {
    alignItems: "flex-end",
    flex: 4,
    flexDirection: "row",
    justifyContent: "center",
  },
  redText: {
    color: colours.red,
    textAlign: "center",
  },
  textView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    ...standards.elementPadding,
  },
});

export { Pending };
