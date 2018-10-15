// @flow

import React, { Component } from "react";
import { Animated, Easing } from "react-native";

import { colours } from "styles";

type Props = {
  delay: number,
};

class Dot extends Component<Props> {
  animatedValue: any;

  constructor() {
    super();
    this.animatedValue = new Animated.Value(0);
  }

  componentDidMount() {
    this.animate();
  }

  animate() {
    const { delay } = this.props;

    this.animatedValue.setValue(0);
    Animated.timing(this.animatedValue, {
      toValue: 1,
      delay,
      duration: 1800,
      easing: Easing.bounce,
    }).start(() => this.animate());
  }

  render() {
    const movingMargin = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 50, 0],
    });

    return (
      <Animated.View
        style={{
          backgroundColor: colours.red,
          borderRadius: 15,
          height: 30,
          width: 30,
          margin: 10,
          marginBottom: movingMargin,
        }}
      />
    );
  }
}

export { Dot };
