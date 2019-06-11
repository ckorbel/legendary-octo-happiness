import React from "react";
import { View, Text, StyleSheet, Image, Platform } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const Navbar = () => {
  const { container, navText, home, navItemContainer } = styles;
  return (
    <View style={container}>
      <View style={navItemContainer}>
        <Icon
          name={Platform.OS === "ios" ? "ios-home" : "md-home"}
          color="#ccc"
          size={30}
        />
        <Text style={navText}>Home</Text>
      </View>
      <View style={navItemContainer}>
        <Icon
          name={Platform.OS === "ios" ? "ios-paper" : "md-paper"}
          color="#ccc"
          size={30}
        />
        <Text style={navText}>Todo List</Text>
      </View>
      <View style={navItemContainer}>
        <Icon
          name={Platform.OS === "ios" ? "ios-checkbox" : "md-checkbox"}
          color="#ccc"
          size={30}
        />
        <Text style={navText}>Grocery List</Text>
      </View>
      <View style={navItemContainer}>
        <Icon
          name={Platform.OS === "ios" ? "ios-clipboard" : "md-clipboard"}
          color="#ccc"
          size={30}
        />
        <Text style={navText}>Notes</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    borderColor: "black",
    borderTopWidth: 1
  },
  navItemContainer: {
    alignItems: "center"
  },
  navText: {
    color: "grey"
  },
  home: {
    color: "black",
    backgroundColor: "green"
  }
});

export default Navbar;
