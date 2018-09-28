// @flow

import React, { Component } from "react";
import {
  Badge,
  Container,
  Content,
  List,
  ListItem,
  H2,
  H3,
  Header,
  Text,
  View,
} from "native-base";

import { ProgressBar } from "components";
import { styles } from "styles";
import type { navigationType } from "types";

type Props = { navigation: navigationType };

class Goal extends Component<Props> {
  static navigationOptions = () => {
    return {
      title: "Goal",
    };
  };

  render() {
    const details = this.props.navigation.getParam("details");
    const { actions, score, tag, title, description } = details;

    return (
      <Container>
        <Content style={styles.content}>
          <View style={styles.element}>
            <H2>{title}</H2>
            <Badge>
              <Text>{tag}</Text>
            </Badge>
          </View>
          <ProgressBar score={score} />
          <View style={styles.element}>
            <Text>{description}</Text>
          </View>
          <View style={styles.element}>
            <H3>Actions: </H3>
            <List>{this._renderActions(actions)}</List>
          </View>
        </Content>
      </Container>
    );
  }

  _renderActions(actions) {
    return actions.map((action, index) => (
      <ListItem key={index} style={{ marginLeft: 0 }}>
        <Text>{action}</Text>
      </ListItem>
    ));
  }
}

export { Goal };
