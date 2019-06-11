import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = () => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>Org App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: "#F8F8F8",
    justifyContent: "center",
    alignItems: "center",
    height: 80,
    paddingTop: 20
  },
  textStyle: {
    fontSize: 20
  }
});

export default Header;
