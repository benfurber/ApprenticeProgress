import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

class ProgressBar extends Component {
  render() {
    return (
      <View styles={styles.table}>
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

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 5,
  },
  rowButtons: {},
  rowBars: {},
  table: {
    alignContent: "center",
    marginBottom: 30,
  },
  cell: {
    flex: 2,
    alignItems: "center",
    position: "relative",
  },
  cellPadder: {
    flex: 1,
  },
  bar: {
    height: 14,
  },
  barBackground: {
    flex: 10,
    alignItems: "flex-start",
    position: "relative",
    backgroundColor: "#f3f3f3",
  },
  barScore0: { width: "0%" },
  barScore1: { width: "20%", backgroundColor: "#dc143c" },
  barScore2: { width: "40%", backgroundColor: "#d35f3c" },
  barScore3: { width: "60%", backgroundColor: "#c7893a" },
  barScore4: { width: "80%", backgroundColor: "#b5ab37" },
  barScore5: { width: "100%", backgroundColor: "#9acd32" },

  button: {
    width: 20,
    height: 20,
    borderRadius: 100,
    backgroundColor: "#333",
    marginVertical: 10,
  },
  dash: {
    height: 5,
    width: 1,
    marginBottom: 3,
    backgroundColor: "#666",
  },
});

export { ProgressBar };
