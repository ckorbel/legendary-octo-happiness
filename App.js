/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Navbar from "./src/Layout/Navbar";
import TodoPage from "./src/Layout/TodoPage";

type Props = {};
export default class App extends Component<Props> {
  render() {
    const { footer, mainContentContainer } = styles;
    return (
      <View style={styles.container}>
        <View style={mainContentContainer}>
          <TodoPage />
        </View>
        <View style={footer}>
          <Navbar />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  mainContentContainer: {
    height: 715,
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 80
  },
  footer: {
    height: 100
  }
});
