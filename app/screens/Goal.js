// @flow

import React, { Component } from "react";
import { Content, List, ListItem, H2, H3, Text, View } from "native-base";

import { Background, ProgressBar, Tag } from "components";
import { styles } from "styles";
import type { ListType, navigationType } from "types";

type Props = { navigation: navigationType };
type ListProps = ListType;

class Goal extends Component<Props> {
  static navigationOptions = () => {
    return {
      title: "Goal",
    };
  };

  render() {
    const details = this.props.navigation.getParam("details");
    const { actions, description, evidence, score, tag, title } = details;

    return (
      <Background>
        <Content style={styles.content}>
          <View style={styles.element}>
            <H2>{title}</H2>
            <Tag text={tag} />
          </View>
          <View style={styles.element}>
            <Text style={styles.textDescription}>{description}</Text>
          </View>
          <View style={styles.highlightBox}>
            <View style={styles.element}>
              <H3>Progress: </H3>
            </View>
            <ProgressBar score={score} />
            <View style={styles.element}>
              <H3>Evidence: </H3>
              <List>{this._renderList(evidence)}</List>
            </View>
          </View>
          <View style={styles.element}>
            <H3>Actions: </H3>
            <List>{this._renderList(actions)}</List>
          </View>
        </Content>
      </Background>
    );
  }

  _renderList(list: ListProps) {
    if (list.length === 0) {
      return <Text>None (should probably add some)</Text>;
    }

    return list.map((action, index) => (
      <ListItem key={index} style={{ marginLeft: 0 }}>
        <Text>{action}</Text>
      </ListItem>
    ));
  }
}

export { Goal };
