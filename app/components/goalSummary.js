// @flow

import React, { Component } from "react";
import {
  Body,
  Card,
  CardItem,
  Container,
  Content,
  Header,
  Text,
} from "native-base";

type Props = {
  data: object,
};

class GoalSummary extends Component<Props> {
  render() {
    const data = this.props.data;

    const description = data.description;
    const title = data.title;

    return (
      <Container>
        <Header>
          {title}
        </Header>
        <Content>
          <Card>
            <CardItem>
              <Body>
                <Text>{description}</Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export { GoalSummary };
