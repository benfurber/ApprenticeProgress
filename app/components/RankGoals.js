// @flow

import React, { Component } from "react";
import { FlatList, StyleSheet } from "react-native";
import { List, ListItem, Tab, TabHeading, Tabs, Text } from "native-base";

import { colours, standards, successScaleArray } from "styles";
import type { stateType } from "types";
import { findTitles } from "utils";

type Props = stateType;

class RankGoals extends Component<Props> {
  render() {
    return (
      <Tabs
        style={styles.tabs}
        tabBarUnderlineStyle={{ backgroundColor: colours.black }}
      >
        {this._renderAllTitles()}
      </Tabs>
    );
  }

  _renderAllTitles() {
    const { goals } = this.props;

    let allTitles = [];
    let score = 5;

    while (score > -1) {
      const titleSet = findTitles(goals, score);
      if (titleSet.length > 0) {
        allTitles.push(this._renderTitleSet(titleSet, score));
      }
      score -= 1;
    }

    return allTitles;
  }

  _renderTitleSet(titleSet: {}, score: number) {
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
                  {item.title}
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
