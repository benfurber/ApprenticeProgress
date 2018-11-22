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
        <Icon
          name={this._selectIcon(name)}
          style={[styles.icon, { color: tint }]}
        />
        <Text style={[styles.text, { color: tint }]}>{name}</Text>
      </View>
    );
  }

  _selectIcon(name: string) {
    switch (name) {
      case "Goals":
        return "md-filing";
      case "Progress":
        return "md-speedometer";
      case "Logout":
        return "md-log-out";
      default:
        return "md-egg";
    }
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
