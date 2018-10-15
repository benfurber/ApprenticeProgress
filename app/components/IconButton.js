// @flow

import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Icon, Text, View } from "native-base";

type Props = {
  tint: string,
  name: string,
};

class IconButton extends Component<Props> {
  render() {
    const { tint, name } = this.props;

    return (
      <View style={styles.view}>
        {this._selectIcon()}
        <Text style={[styles.text, { color: tint }]}>{name}</Text>
      </View>
    );
  }

  _selectIcon() {
    const { name, tint } = this.props;

    console.log(tint)

    if (name == "Goals") {
      return <Icon name="md-filing" style={[styles.icon, { color: tint }]} />;
    }

    if (name == "Progress") {
      return (
        <Icon name="md-speedometer" style={[styles.icon, { color: tint }]} />
      );
    }

    return null;
  }
}

const styles = StyleSheet.create({
  icon: {},
  text: {
    paddingLeft: 10,
  },
  view: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export { IconButton };
