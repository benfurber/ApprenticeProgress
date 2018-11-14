// @flow

import React, { Component } from "react";
import { Content } from "native-base";

import { Background, Data, RankGoals, TotalScore } from "components";
import { goalsQuery } from "queries";
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
          <Data
            presentData={data => <TotalScore goals={data.goals} />}
            query={goalsQuery}
          />
          <Data
            presentData={data => <RankGoals goals={data.goals} />}
            query={goalsQuery}
          />
        </Content>
      </Background>
    );
  }
}

export { Progress };
