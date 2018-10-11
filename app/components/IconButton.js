import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Icon } from "native-base";

class IconButton extends Component {
  render() {
    return this._selectIcon();
  }

  _selectIcon() {
    const { name } = this.props;

    if (name == "Goals") {
      return <Icon name="md-filing" style={styles.icon} />;
    };

    if (name == "Progress") {
      return <Icon name="md-speedometer" style={styles.icon} />;
    };

    return null;
  }
}

const styles = StyleSheet.create({
  icon: {},
});

export { IconButton };
