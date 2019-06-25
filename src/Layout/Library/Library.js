import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, FlatList } from "react-native";
import ListItem from "./ListItem";

class Library extends Component {
  renderItem = library => {
    return <ListItem library={library.item} />;
  };

  render() {
    const { library } = this.props;
    return (
      <FlatList
        data={library}
        keyExtractor={library => library.id.toString()}
        renderItem={this.renderItem}
      />
    );
  }
}

const mapStateToProps = state => {
  return { library: state.libraries };
};

export default connect(mapStateToProps)(Library);
