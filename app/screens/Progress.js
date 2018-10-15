import React, { Component } from "react";
import { Content } from "native-base";
import { connect } from "react-redux";

import { Background, RankGoals, TotalScore } from "components";
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
          <TotalScore goals={goals} />
          <RankGoals goals={goals} />
        </Content>
      </Background>
    );
  }
}

const mapStateToProps = state => {
  return { state };
};

const ConnectedProgress = connect(mapStateToProps)(Progress);

export { ConnectedProgress, Progress };
