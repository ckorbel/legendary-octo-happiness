import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from "react-native";
import CardSection from "../../components/common/CardSection";
import * as actions from "../../actions/selection";

class ListItem extends Component {
  componentDidUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription = () => {
    const { expanded, library } = this.props;
    if (expanded) {
      return (
        <CardSection>
          <Text stype={{ flex: 1 }}>{library.description}</Text>
        </CardSection>
      );
    }
  };

  render() {
    const { titleStyle } = styles;
    const { id, text } = this.props.library;
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

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;
  return {
    expanded
  };
};

export default connect(
  mapStateToProps,
  actions
)(ListItem);
