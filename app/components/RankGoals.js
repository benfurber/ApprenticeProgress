import React, { Component } from "react";
import { FlatList } from "react-native";
import { Tabs, Tab, TabHeading, Text, List, ListItem } from "native-base";

import { colours, successScaleArray } from "styles";

class RankGoals extends Component {
  render() {
    const { goals } = this.props;

    return (
      <Tabs style={{ backgroundColor: "transparent" }}>
        {this._renderAllTitles(goals)}
      </Tabs>
    );
  }

  _renderAllTitles(goals) {
    let allTitles = [];
    let score = 5;

    while (score > -1) {
      const titleSet = this._findTitles(goals, score);
      if (titleSet.length > 0) {
        allTitles.push(this._renderTitleSet(titleSet, score));
      }
      score -= 1;
    }

    return allTitles;
  }

  _findTitles(goals, score) {
    let titleSet = [];

    goals.forEach(goal => {
      if (goal.score === score) {
        titleSet.push({ id: goal.id, title: goal.title });
      }
    });

    return titleSet;
  }

  _renderTitleSet(titleSet, score) {
    return (
      <Tab
        key={score}
        heading={
          <TabHeading>
            <Text style={{ color: successScaleArray[score] }}>{score}s</Text>
          </TabHeading>
        }
        style={{ backgroundColor: "transparent" }}
      >
        <List>
          <FlatList
            data={titleSet}
            renderItem={({ item }) => (
              <ListItem style={{backgroundColor: colours.transparentWhite}}>
                <Text style={{ color: successScaleArray[score] }}>
                  - {item.title}
                </Text>
              </ListItem>
            )}
            keyExtractor={item => item.id.toString()}
          />
        </List>
      </Tab>
    );
  }
}

export { RankGoals };
