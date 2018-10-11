import React, { Component } from "react";
import { Text } from "native-base";

import { Background } from "components";

class Progress extends Component {
  static navigationOptions = () => {
    return {
      title: "Progress",
    };
  }

  render() {
    return (
      <Background>
        <Text>Progress</Text>
      </Background>
    );
  }
};

export { Progress };