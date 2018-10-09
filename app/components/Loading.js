import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Container } from "native-base";

import { Dot } from "components";

class Loading extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Dot delay={0} />
        <Dot delay={500}/>
        <Dot delay={900}/>
        <Dot delay={300}/>
        <Dot delay={1200}/>
      </Container>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
});

export { Loading };
