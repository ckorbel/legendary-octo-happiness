import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import CardSection from "../../components/common/CardSection";
import * as actions from "../../actions/selection";

class ListItem extends Component {
  renderDescription = () => {
    const { id, description } = this.props.library.item;
    console.log(id, this.props.selectedLibraryId);
    if (id === this.props.selectedLibraryId) {
      return <Text>{description}</Text>;
    }
  };

  render() {
    const { titleStyle } = styles;
    const { id, text } = this.props.library.item;
    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={titleStyle}>{text}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
});

const mapStateToProps = state => {
  return { selectedLibraryId: state.selectedLibraryId };
};

export default connect(
  mapStateToProps,
  actions
)(ListItem);
