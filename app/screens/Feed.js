// @flow

import React, { Component } from "react";
import { Container, Content } from "native-base";
import { connect } from "react-redux";

import { GoalsList } from "components";
import { goalsAction } from "redux-modules/goals";
import type { navigationType } from "types";

type Props = {
  navigation: navigationType,
};

class Feed extends Component<Props> {
  static navigationOptions = {
    title: "ApprenticeProgress",
  };

  render() {
    const goalsData = {
      [1]: {
        actions: ["1", "2"],
        description: "HELLO",
        score: 1,
        tag: "Team thoughtbot",
        title: "I contribute to thoughtbot being a good place to work",
      },
      [2]: {
        actions: ["1", "2"],
        description: "",
        score: 2,
        tag: "Team thoughtbot",
        title: "I iterate over my existing knowledge effectively",
      },
      [3]: {
        actions: ["1", "2"],
        description: "",
        score: 3,
        tag: "Team thoughtbot",
        title: "I’m a great pair programmer",
      },
      [4]: {
        actions: ["1", "2"],
        description: "",
        score: 1,
        tag: "Team thoughtbot",
        title: "I help others become better ",
      },
      [5]: {
        actions: ["1", "2"],
        description: "",
        score: 3,
        tag: "Team thoughtbot",
        title: "I’m passionate about software/products",
      },
      [6]: {
        actions: ["1", "2"],
        description: "",
        score: 4,
        tag: "Team thoughtbot",
        title: "I set my own direction",
      },
    };

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
  return {
    goals: state.goals,
  };
};

const mapDispatchToProps = dispatch => ({
  goalsAction: dispatch(goalsAction()),
});

const connectedFeed = connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);

export { connectedFeed as Feed };
