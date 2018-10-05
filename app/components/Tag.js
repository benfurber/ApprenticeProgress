import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Badge, Text } from "native-base";

import { lastWordOfString } from "utils";

class Tag extends Component {
  render() {
    const { text } = this.props;

    return (
      <Badge style={this._tagStyle(text)}>
        <Text>{text}</Text>
      </Badge>
    );
  };

  _tagStyle(text) {
    const option = lastWordOfString(text);
    const styleOptions = {
      thoughtbot: styles.thoughtbot,
      developer: styles.developer,
      consultant: styles.consultant,
    };

    return styleOptions[option];
  }
};

const styles = StyleSheet.create({
  thoughtbot: {
    backgroundColor: "#ED3E44",
  },
  developer: {
    backgroundColor: "#EF8D3F",
  },
  consultant: {
    backgroundColor: "#BE3284",
  },
});

export { Tag };
