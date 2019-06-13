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
import CardsPage from "./src/Layout/CardsPage";
import LoginForm from "./src/Layout/LoginForm";
import Header from "./src/Layout/Header";

type Props = {};
export default class App extends Component<Props> {
  render() {
    const { footer, mainContentContainer } = styles;
    return (
      <View style={styles.container}>
        <Header headerText="Organization App" />
        <View style={mainContentContainer}>
          <LoginForm />
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
    height: 630
    // flex: 1,
    // justifyContent: "flex-start",
    // alignItems: "center",
    // marginTop: 80
  },
  footer: {
    height: 100
  }
});
