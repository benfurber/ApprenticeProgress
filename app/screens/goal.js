import React, { Component } from "react";
import {
  Container,
  Content,
  List,
  ListItem,
  H1,
  H3,
  Header,
  Text,
} from "native-base";

class Goal extends Component {
  render() {
    const { score, tag, title, description } = this.props.details;

    return (
      <Container>
        <Header>
          <H1>
            {title} ({score}
            /5)
          </H1>
        </Header>
        <Content>
          <Text>Part of: {tag}</Text>
          <Text>{description}</Text>

          <H3>Actions: </H3>
          <List>{this._renderActions()}</List>
        </Content>
      </Container>
    );
  }

  _renderActions() {
    const { actions } = this.props.details;

    return actions.map((action, index) => (
      <ListItem key={index}>
        <Text>{action}</Text>
      </ListItem>
    ));
  }
}

export { Goal };
