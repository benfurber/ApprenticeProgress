import { StyleSheet } from "react-native";

const standards = {
  elementPadding: {
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  borders: {
    borderColor: "#5A6268",
    borderTopWidth: 2,
    borderBottomWidth: 2,
  },
};

const colours = {
  black: "#3D3E44",
  grey: "#666",
  red: "#ED3E44",
  transparentWhite: "#FFFFFFCF",
  white: "#FFF",
  success20: "#dc143c",
  success40: "#d35f3c",
  success60: "#c7893a",
  success80: "#b5ab37",
  success100: "#9acd32",
};

const successScaleArray = [
  colours.grey,
  colours.success20,
  colours.success40,
  colours.success60,
  colours.success80,
  colours.success100,
];

const styles = StyleSheet.create({
  content: {
    backgroundColor: colours.transparentWhite,
    paddingTop: 20,
  },
  element: {
    ...standards.elementPadding,
  },
  header: {
    flexDirection: "column",
    ...standards.elementPadding,
  },
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
    flexDirection: "row",
    paddingVertical: 20,
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
  barScore1: { width: "20%", backgroundColor: colours.success20 },
  barScore2: { width: "40%", backgroundColor: colours.success40 },
  barScore3: { width: "60%", backgroundColor: colours.success60 },
  barScore4: { width: "80%", backgroundColor: colours.success80 },
  barScore5: { width: "100%", backgroundColor: colours.success100 },

  dash: {
    height: 5,
    width: 1,
    marginBottom: 3,
    backgroundColor: "#666",
  },

  highlightBox: {
    backgroundColor: "#DBD4CBAA",
    ...standards.borders,
  },

  textDescription: {
    color: "#3d3e44",
    fontSize: 18,
    fontStyle: "italic",
    paddingBottom: 5,
  },
});

export { colours, standards, styles, successScaleArray };
