import React, { Component } from "react";
import { Badge, Text } from "native-base";

import { lastWordOfString } from "utils";

class Tag extends Component {
  render() {
    const { text } = this.props;

    return (
      <Badge style={{ backgroundColor: this._tagStyle(text) }}>
        <Text>{text}</Text>
      </Badge>
    );
  }

  _tagStyle(text) {
    const option = lastWordOfString(text);
    const styleOptions = {
      thoughtbot: "#ED3E44",
      developer: "#EF8D3F",
      consultant: "#BE3284",
    };

    return styleOptions[option];
  }
}

export { Tag };
