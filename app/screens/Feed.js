// @flow

import React, { Component } from "react";
import { Content } from "native-base";
import { connect } from "react-redux";

import { Background, GoalsList, Loading } from "components";
import { fetchGoals } from "redux-modules";
import type { navigationType, stateType } from "types";

type Props = {
  navigation: navigationType,
  state: stateType,
};

class Feed extends Component<Props> {
  static navigationOptions = {
    title: "ApprenticeProgress",
  };

  render() {
    return (
      <Background>
        <Content>
          {this._renderLoading()}
          {this._renderGoals()}
        </Content>
      </Background>
    );
  }

  _renderLoading() {
    const { goals } = this.props.state;

    if (goals.length == 0) {
      return <Loading />;
    }
  }

  _renderGoals() {
    const { navigation, state } = this.props;
    const { goals } = state;

    if (goals.length > 0) {
      return <GoalsList goals={goals} navigation={navigation} />;
    }
  }
}

const mapStateToProps = state => {
  return { state };
};

const mapDispatchToProps = (dispatch: any) => ({
  goals: fetchGoals(dispatch),
});

const ConnectedFeed = connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);

export { ConnectedFeed, Feed };
