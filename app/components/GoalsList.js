// @flow

import React, { Component } from "react";
import { FlatList } from "react-native";
import { Content } from "native-base";

import { GoalSummary } from "components";
import type { GoalsDataType, navigationType } from "types";
import { orderByTitle } from "utils";

type Props = { goals: GoalsDataType, navigation: navigationType };

class GoalsList extends Component<Props> {
  render() {
    let { goals } = this.props;
    goals = orderByTitle(goals);

    return (
      <Content>
        <FlatList
          data={goals}
          renderItem={({item}) => this._renderGoal(item)}
          keyExtractor={item => item.id.toString()}
        />
      </Content>
    );
  };

  _renderGoal(goal) {
    return (
      <GoalSummary
        details={goal}
        navigation={this.props.navigation}
      />
    );
  }
};

export { GoalsList };
