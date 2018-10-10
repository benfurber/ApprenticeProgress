import React, { Component } from "react";
import { Image, StyleSheet } from "react-native";
import { Container, View } from "native-base";

class Background extends Component {
  render() {
    const { children } = this.props;

    return (
      <Container style={styles.container}>
        <View style={styles.childrenView}>{children}</View>
        <View style={styles.imageView}>
          {this._renderImage()}
          {this._renderImage()}
          {this._renderImage()}
        </View>
        {this._renderRalph()}
      </Container>
    );
  }

  _renderImage() {
    return (
      <Image
        source={require("../assets/images/background.png")}
        resizeMode="repeat"
      />
    );
  }

  _renderRalph() {
    const { noRalph } = this.props;

    if (!noRalph) {
      return (
        <View style={styles.ralphView}>
          <Image
            source={require("../assets/images/ralph.png")}
            style={styles.ralph}
          />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "stretch",
    flex: 1,
    flexDirection: "column-reverse",
    justifyContent: "flex-start",
  },
  childrenView: {
    flex: 1,
    zIndex: 2,
  },
  imageView: {
    flex: 1,
    position: "absolute",
    zIndex: 0,
  },
  ralphView: {
    right: -35,
    flexDirection: "row",
    position: "absolute",
    zIndex: 1,
  },
  ralph: {
    alignSelf: "flex-end",
  },
});

export { Background };
