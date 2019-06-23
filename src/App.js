/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

import { Provider } from "react-redux";
import store from "./store";

import Navbar from "./Layout/Navbar";
import TodoPage from "./Layout/TodoPage";
import CardsPage from "./Layout/CardsPage";
import LoginForm from "./Layout/LoginForm";
import Header from "./Layout/Header";

export default class App extends Component {
  render() {
    const { footer, mainContentContainer } = styles;
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Header headerText="Organization App" />
          <View style={mainContentContainer}>
            <LoginForm />
          </View>
          <View style={footer}>
            <Navbar />
          </View>
        </View>
      </Provider>
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
