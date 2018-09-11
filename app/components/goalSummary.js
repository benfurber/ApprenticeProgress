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

class GoalSummary extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem>
              <Body>
                <Text>Hello world</Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export { GoalSummary };
