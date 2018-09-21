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
    const { score, tag, title, description } = this.props.details;

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
            <List>{this._renderActions()}</List>
          </View>
        </Content>
      </Container>
    );
  }

  _renderActions() {
    const { actions } = this.props.details;

    return actions.map((action, index) => (
      <ListItem key={index} style={{marginLeft: 0}}>
        <Text>{action}</Text>
      </ListItem>
    ));
  }
}

export { Goal };
