import React, { Component } from "react";
import { Text, View } from "react-native";

import { styles } from "styles";

class ProgressBar extends Component {
  render() {
    return (
      <View styles={[styles.table, this.props.style]}>
        <View style={[styles.row, styles.Bars]}>
          <View style={styles.cellPadder} />
          <View style={styles.barBackground}>
            <View style={[styles.bar, this._selectScoreStyle()]} />
          </View>
          <View style={styles.cellPadder} />
        </View>

        <View style={[styles.row, styles.rowButtons]}>
          {this._renderLabels()}
        </View>
      </View>
    );
  }

  _selectScoreStyle() {
    const { score } = this.props || 0;

    const barScoreArray = [
      styles.barScore0,
      styles.barScore1,
      styles.barScore2,
      styles.barScore3,
      styles.barScore4,
      styles.barScore5,
    ];

    return barScoreArray[score];
  }

  _renderLabels() {
    let labels = [];
    let label = 0;

    while (label < 6) {
      labels.push(
        <View key={label} style={styles.cell}>
          <View style={styles.dash} />
          <Text>{label}</Text>
        </View>
      );
      label++;
    }

    return labels;
  }
}

export { ProgressBar };
