import React, { Component } from "react";
import { H2 } from "native-base";
import { connect } from "react-redux";

import { Background } from "components";

class Progress extends Component {
  static navigationOptions = () => {
    return {
      title: "Progress",
    };
  }

  render() {
    return (
      <Background>
        <H2>Total score: {this._scoreCount()}</H2>

      </Background>
    );
  }

  _scoreCount() {
    const { goals } = this.props.state;

    let totalScore = 0;
    let totalPossibleScore = goals.length * 5;

    goals.forEach((goal) => {
      totalScore += goal.score;
    });

    return `(${totalScore}/${totalPossibleScore})`;
  }
};

const mapStateToProps = state => {
  return { state };
};

const ConnectedProgress = connect(
  mapStateToProps
)(Progress);

export { ConnectedProgress, Progress };
