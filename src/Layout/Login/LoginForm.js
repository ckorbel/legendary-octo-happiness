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
import { emailChange, registerUser } from "../../actions/auth";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      errors: {}
    };
  }

  handleUserLogin = () => {
    this.props.registerUser(this.state);
  };

  render() {
    const { email, password, firstName, lastName } = this.state;
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
          <FieldInput
            value={firstName}
            onChangeText={firstName => this.setState({ firstName })}
            label="First Name"
            placeholder="First Name"
          />
          <FieldInput
            value={lastName}
            onChangeText={lastName => this.setState({ lastName })}
            label="Last Name"
            placeholder="Last Name"
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

LoginForm.propType = {
  registerUser: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    email: state.auth
  };
};

export default connect(
  mapStateToProps,
  { registerUser }
)(LoginForm);
