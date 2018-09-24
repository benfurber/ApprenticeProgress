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

class Goal extends Component {
  render() {
    let details;
    if (this.props.navigation === undefined) {
      details = this.props.mockParams.details;
    } else {
      details = this.props.navigation.getParam("details");
    }

    const { actions, score, tag, title, description } = details;

    return (
      <Container>
        <Header style={styles.header}>
          <H2 styles={{padding: 20}}>{title}</H2>
          <Badge><Text>{tag}</Text></Badge>
        </Header>
        <Content style={styles.content}>
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
      <ListItem key={index} style={{marginLeft: 0}}>
        <Text>{action}</Text>
      </ListItem>
    ));
  }
}

export { Goal };
