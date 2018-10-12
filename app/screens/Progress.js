import React, { Component } from "react";
import { Content, H2, View } from "native-base";
import { connect } from "react-redux";

import { Background, RankGoals } from "components";
import { styles } from "styles";

class Progress extends Component {
  static navigationOptions = () => {
    return {
      title: "Progress",
    };
  };

  render() {
    const { goals } = this.props.state;

    return (
      <Background>
        <Content style={styles.content}>
          <View style={styles.element}>
            <H2>Total score: {this._scoreCount(goals)}</H2>
          </View>
          <RankGoals goals={goals} />
        </Content>
      </Background>
    );
  }

  _scoreCount(goals) {
    let totalScore = 0;
    let totalPossibleScore = goals.length * 5;

    goals.forEach(goal => {
      totalScore += goal.score;
    });

    return `(${totalScore}/${totalPossibleScore})`;
  }
}

const mapStateToProps = state => {
  return { state };
};

const ConnectedProgress = connect(mapStateToProps)(Progress);

export { ConnectedProgress, Progress };
