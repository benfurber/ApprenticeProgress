// @flow

import React, { Component } from "react";
import { graphql } from "react-apollo";

import { Background, GoalsList, Pending } from "components";
import { goalsQuery } from "queries";
import type { GraphDataType, navigationType } from "types";

type Props = {
  navigation: navigationType,
  data: GraphDataType,
};

class Feed extends Component<Props> {
  static navigationOptions = {
    title: "ApprenticeProgress",
  };

  render() {
    const { data, navigation } = this.props;

    if (data.goals) {
      return (
        <Background>
          <GoalsList navigation={navigation} goals={data.goals} />
        </Background>
      );
    }

    if (data.error) {
      return <Pending condition="Error" errorMessage={data.error.message} />;
    }

    return <Pending condition="Loading" />;
  }
}

const FeedWrapper = graphql(goalsQuery)(Feed);

export { Feed, FeedWrapper };
