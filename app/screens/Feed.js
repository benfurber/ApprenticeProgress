// @flow

import React, { Component } from "react";
import { Container, Content } from "native-base";
import { connect } from "react-redux";

import { GoalsList } from "components";
import { goalsAction } from "redux-modules";
import type { navigationType } from "types";

import { goalsData } from "../data/goals";

type Props = {
  navigation: navigationType,
};

class Feed extends Component<Props> {
  static navigationOptions = {
    title: "ApprenticeProgress",
  };

  render() {
    return (
      <Container>
        <Content>
          <GoalsList goals={goalsData} navigation={this.props.navigation} />
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return { goals: state.goals };
};

const mapDispatchToProps = dispatch => ({
  goalsAction: dispatch(goalsAction()),
});

const connectedFeed = connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);

export { connectedFeed as Feed };
