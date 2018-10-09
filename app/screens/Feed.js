// @flow

import React, { Component } from "react";
import { Container } from "native-base";
import { connect } from "react-redux";

import { GoalsList, Loading } from "components";
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
        {this._renderLoading(goals)}
        {this._renderGoals(goals, navigation)}
      </Container>
    );
  };

  _renderLoading(goals) {
    if (goals.length == 0) {
      return <Loading />;
    };
  };

  _renderGoals(goals, navigation) {
    if (goals.length > 0) {
      return <GoalsList goals={goals} navigation={navigation} />;
    };
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
