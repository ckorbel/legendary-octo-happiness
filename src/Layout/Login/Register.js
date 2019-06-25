import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, StyleSheet } from "react-native";
import Card from "../../components/common/Card";
import CardSection from "../../components/common/CardSection";
import Button from "../../components/common/Button";
import FieldInput from "../../components/common/FieldInput";
import UserFactory from "../../api/user";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alerts";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  handleUserLogin = () => {
    UserFactory.registerNewUser(this.state)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
        props.setAlert("This is an alert", "danger");
      });
  };

  render() {
    const { email, password } = this.state;
    return (
      <Card>
        <View>
          <FieldInput
            value={email}
            onChangeText={email => this.setState({ email })}
            label="Email"
            placeholder="user@gmail.com"
          />
          <FieldInput
            value={password}
            onChangeText={password => this.setState({ password })}
            label="Password"
            placeholder="password"
            secureTextEntry={true}
          />
        </View>

        <CardSection>
          <Button onPress={this.handleUserLogin}>Login</Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {}
});

export default connect(
  null,
  { setAlert }
)(LoginForm);
