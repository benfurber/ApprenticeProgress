// @flow

import React, { Component } from "react";
import { Badge, Text } from "native-base";

import { lastWordOfString } from "utils";

type Props = {
  text: string,
};

class Tag extends Component<Props> {
  render() {
    const { text } = this.props;

    return (
      <Badge style={{ backgroundColor: this._tagStyle(text) }}>
        <Text>{text}</Text>
      </Badge>
    );
  }

  _tagStyle(text: string) {
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
