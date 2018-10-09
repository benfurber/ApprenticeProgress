import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { View } from "native-base";

import { Background, Dot } from "components";

class Loading extends Component {
  render() {
    return (
      <Background noRalph={true}>
        <View style={styles.view}>
          <Dot delay={0} />
          <Dot delay={500} />
          <Dot delay={900} />
          <Dot delay={300} />
          <Dot delay={1200} />
        </View>
      </Background>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
});

export { Loading };
