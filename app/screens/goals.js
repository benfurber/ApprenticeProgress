import React, { Component } from "react";
import { Text, View } from "react-native";

export class Goals extends Component {
  getGoals(goalsData) {
    return goalsData.goals.map(goal => {
      return goal.title;
    });
  }

  render() {
    return (
      <View>
        <Text>{
          this.getGoals(goalsData)
        }</Text>
      </View>
    );
  }
}

const goalsData = {
  goals: [
    {
      "title": "Goal 1",
      "description": "Desc",
    },
    {
      "title": "Goal 2",
      "description": "Desc",
    },
  ],
};
