/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from "react";
import { Body, Container, Content, Footer, Header, Title } from "native-base";
import { Goals } from "screens";

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Container>

        <Header>
          <Title>ApprenticeProgress</Title>
        </Header>

        <Body>
          <Content padder>
            <Goals />
          </Content>
        </Body>

        <Footer />

      </Container>
    );
  }
}
