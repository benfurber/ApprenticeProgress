import React, { Component } from "react";
import { Text, View } from "native-base";

class ProgressBar extends Component {
  render() {
    return (
      <View>
        <View style={{ flex: 1 }}>
          <Text>.</Text>
        </View>
      </View>
    );
  }
}

export { ProgressBar };
