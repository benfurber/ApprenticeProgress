// @flow

import React, { Component } from "react";
import { Content } from "native-base";

import { Background, RankGoals, TotalScore } from "components";
import { styles } from "styles";
import type { stateType } from "types";

type Props = {
  state: stateType,
};

class Progress extends Component<Props> {
  static navigationOptions = () => {
    return {
      title: "Progress",
    };
  };

  render() {
    return (
      <Background>
        <Content style={styles.content}>
        </Content>
      </Background>
    );
  }
}

