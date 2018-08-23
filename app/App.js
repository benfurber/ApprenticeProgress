/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from "react";
import { Body, Container, Header, Title } from "native-base";
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
          <Goals />
        </Body>

      </Container>
    );
  }
}
