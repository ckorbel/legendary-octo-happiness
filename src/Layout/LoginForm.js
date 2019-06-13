import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import Card from "../components/common/Card";
import CardSection from "../components/common/CardSection";
import Button from "../components/common/Button";
import FieldInput from "../components/common/FieldInput";

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      text: ""
    };
  }

  render() {
    const { textInput } = styles;
    const { text } = this.state;
    return (
      <Card>
        <View>
          <FieldInput
            value={text}
            onChangeText={text => this.setState({ text })}
            label="email"
          />
        </View>
        <CardSection />

        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {}
});

export default LoginForm;
