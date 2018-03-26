/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

import { requireNativeComponent, NativeModules } from "react-native";

class FancyViewManager extends React.Component {
  render() {
    return <RNFancyViewManager {...this.props} />;
  }
}

FancyViewManager.propTypes = {};

const RNFancyViewManager = requireNativeComponent("FancyViewManager", FancyViewManager, {
  nativeOnly: {
    nativeID: true,
    accessibilityComponentType: true,
    onLayout: true,
    testID: true,
    importantForAccessibility: true,
    accessibilityLiveRegion: true,
    accessibilityLabel: true,
    renderToHardwareTextureAndroid: true,
  },
});

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android: "Double tap R on your keyboard to reload,\n" + "Shake or press menu button for dev menu",
});

type Props = {};
export default class App extends Component<Props> {
  componentDidMount = () => {
    const { FancyNativeModule } = NativeModules;
    FancyNativeModule.addNumbers(1, 2).then(result => {
      console.log(`Sum is ${result}`);
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <RNFancyViewManager style={{ width: 160, height: 160 }} />
        <Text style={styles.instructions}>Hello, there!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
});
