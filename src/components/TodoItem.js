import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const TodoItem = ({ title }) => {
  const { todoContainer, leftContainer, rightContainer } = styles;
  return (
    <View style={todoContainer}>
      <View style={leftContainer}>
        <Text style={{ textAlign: "left" }}>{title}</Text>
      </View>
      <View style={rightContainer}>
        <Button title="delete" />
      </View>
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  todoContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "yellow",
    flexDirection: "row",
    maxHeight: 40
  },
  leftContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  rightContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingLeft: 15,
    backgroundColor: "red",
    flex: 0.3
  },
  button: {}
});
