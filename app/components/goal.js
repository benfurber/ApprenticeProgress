import React, { Component } from "react";
import { Badge, Card, Text } from "native-base";
import styles from "styles";

export class Goal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card style={styles.card}>
        <Text style={styles.cardText}>{this.props.data.title}</Text>
        <Badge>
          <Text>{this.props.data.tags}</Text>
        </Badge>
      </Card>
    );
  }
}
