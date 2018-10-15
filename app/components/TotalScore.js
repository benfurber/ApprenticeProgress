import React, { Component } from "react";
import { H2, Text, View } from "native-base";

import { Tag } from "components";
import { styles } from "styles";
import { calculateTotalScore, filterByTag } from "utils";

class TotalScore extends Component {
  render() {
    return (
      <View style={{ paddingBottom: 10 }}>
        <View style={styles.element}>
          <H2>Total score: ({this._countScore()})</H2>
        </View>
        <View style={styles.element}>
          {this._renderTag("Team thoughtbot")}
          {this._renderTag("I'm a developer")}
          {this._renderTag("I'm a consultant")}
        </View>
      </View>
    );
  }

  _renderTag(name) {
    return (
      <View style={{ flexDirection: "row" }}>
        <Tag text={name} />
        <Text>: {this._countScore(name)}</Text>
      </View>
    );
  }

  _countScore(tagName = false) {
    let { goals } = this.props;
    goals = filterByTag(goals, tagName);

    const totalScore = calculateTotalScore(goals);
    const totalPossibleScore = goals.length * 5;

    return `${totalScore}/${totalPossibleScore}`;
  }
}

export { TotalScore };
