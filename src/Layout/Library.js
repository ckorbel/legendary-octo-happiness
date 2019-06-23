import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";

class Library extends Component {
  render() {
    console.log(this.props);
    return (
      <View>
        <Text>'Libraru Here</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { library: state.libraries };
};

export default connect(mapStateToProps)(Library);
