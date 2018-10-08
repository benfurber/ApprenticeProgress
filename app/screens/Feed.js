// @flow

import React, { Component } from "react";
import { Container } from "native-base";
import { connect } from "react-redux";

import { GoalsList } from "components";
import { fetchGoals } from "redux-modules";
import type { navigationType } from "types";

type Props = {
  navigation: navigationType,
  state: {
    goals: {},
  },
};

class Feed extends Component<Props> {
  static navigationOptions = {
    title: "ApprenticeProgress",
  };

  render() {
    const { navigation, state } = this.props;
    const { goals } = state;

    return (
      <Container>
        <GoalsList goals={goals} navigation={navigation} />
      </Container>
    );
  }

};

const mapStateToProps = state => {
  return { state };
};

const mapDispatchToProps = dispatch => ({
  goals: fetchGoals(dispatch),
});

const ConnectedFeed = connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);

export { ConnectedFeed, Feed };
