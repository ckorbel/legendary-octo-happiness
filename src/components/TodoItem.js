import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import PropTypes from "prop-types";

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

TodoItem.propTypes = {
  title: PropTypes.string,
  hanldeDelete: PropTypes.func
};

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

export default TodoItem;
