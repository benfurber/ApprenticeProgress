import React, { Component } from "react";
import { Card, Text } from "native-base";

export class Goal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card>
        <Text>{ this.props.data.title }</Text>
      </Card>
    );
  }
}
