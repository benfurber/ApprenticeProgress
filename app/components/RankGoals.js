import React, { Component } from "react";
import { FlatList, StyleSheet } from "react-native";
import { List, ListItem, Tab, TabHeading, Tabs, Text } from "native-base";

import { colours, standards, successScaleArray } from "styles";

class RankGoals extends Component {
  render() {
    const { goals } = this.props;

    return (
      <Tabs
        style={styles.tabs}
        tabBarUnderlineStyle={{ backgroundColor: colours.black }}
      >
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
        <List style={styles.list}>
          <FlatList
            data={titleSet}
            renderItem={({ item }) => (
              <ListItem>
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

const styles = StyleSheet.create({
  tabs: {
    backgroundColor: colours.transparentWhite,
    height: 300,
    ...standards.borders,
  },
  list: {
    minHeight: 240,
  },
});

export { RankGoals };
