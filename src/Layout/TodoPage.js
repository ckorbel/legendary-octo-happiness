import React, { Component } from "react";
import { Button, StyleSheet, Text, View, TextInput } from "react-native";
import TodoItem from "../components/TodoItem";

class TodoPage extends Component {
  constructor() {
    super();
    this.state = {
      todos: ["This is a an example todo"],
      text: ""
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleAddTodo = () => {
    // const { text } = this.state;
    const newValue = this.state.text;
    if (newValue.length > 1) {
      this.setState({ todos: [...this.state.todos, newValue], text: "" });
    }
  };

  handleDelete = () => {
    console.log("fired", index);
  };

  render() {
    const { text, todos, todoContainer } = this.state;
    return (
      <View style={styles.mainContainer}>
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            width: 300
          }}
          onChangeText={text => this.setState({ text })}
          value={text}
        />
        <Button title="Add to List" onPress={this.handleAddTodo} />
        {todos.map((todo, index) => (
          <TodoItem title={todo} key={index} handleDelete={this.handleDelete} />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eff0f1"
  },
  button: {
    color: "white",
    backgroundColor: "blue"
  }
});

export default TodoPage;
