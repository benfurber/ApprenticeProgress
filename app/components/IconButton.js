import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Icon, Text, View } from "native-base";

class IconButton extends Component {
  render() {
    const { name } = this.props;

    return (
      <View style={styles.view}>
        {this._selectIcon(name)}
        <Text style={styles.text}>{name}</Text>
      </View>
    );
  }

  _selectIcon(name) {
    if (name == "Goals") {
      return <Icon name="md-filing" style={styles.icon} />;
    }

    if (name == "Progress") {
      return <Icon name="md-speedometer" style={styles.icon} />;
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
