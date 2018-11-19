// @flow

import React, { Component } from "react";
import { graphql } from "react-apollo";

import { Background, Pending, RankGoals, TotalScore } from "components";
import { goalsQuery } from "queries";
import type { GraphDataType } from "types";

type Props = {
  data: GraphDataType,
};

class Progress extends Component<Props> {
  static navigationOptions = () => {
    return {
      title: "Progress",
    };
  };

  render() {
    const { data } = this.props;

    if (data.goals) {
      return (
        <Background>
          <TotalScore goals={data.goals} />
          <RankGoals goals={data.goals} />
        </Background>
      );
    }

    if (data.error) {
      return <Pending condition="Error" errorMessage={data.error.message} />;
    }

    return <Pending condition="Loading" />;
  }
}

const ProgressWrapper = graphql(goalsQuery)(Progress);

export { Progress, ProgressWrapper };
