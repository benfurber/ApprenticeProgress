import { StyleSheet } from "react-native";

const standards = {
  elementPadding: {
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
};

const styles = StyleSheet.create({
  content: {
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
  barScore1: { width: "20%", backgroundColor: "#dc143c" },
  barScore2: { width: "40%", backgroundColor: "#d35f3c" },
  barScore3: { width: "60%", backgroundColor: "#c7893a" },
  barScore4: { width: "80%", backgroundColor: "#b5ab37" },
  barScore5: { width: "100%", backgroundColor: "#9acd32" },

  dash: {
    height: 5,
    width: 1,
    marginBottom: 3,
    backgroundColor: "#666",
  },
});

export { styles };