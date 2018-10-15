import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Icon, Text, View } from "native-base";

class IconButton extends Component {
  render() {
    const { tint, name } = this.props;

    return (
      <View style={styles.view}>
        {this._selectIcon(name, tint)}
        <Text style={[styles.text, {color: tint}]}>{name}</Text>
      </View>
    );
  }

  _selectIcon(name, tint) {
    if (name == "Goals") {
      return <Icon name="md-filing" style={[styles.icon, {color: tint}]} />;
    }

    if (name == "Progress") {
      return <Icon name="md-speedometer" style={[styles.icon, {color: tint}]} />;
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
