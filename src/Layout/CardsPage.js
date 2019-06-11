import React, { Component } from "react";
import { View, Text } from "react-native";
import CardDetail from "../components/Cards/CardDetail";
import axios from "axios";

class CardsPage extends Component {
  constructor() {
    super();
    this.state = {
      cards: []
    };
  }

  componentWillMount() {
    axios
      .get("https://rallycoding.herokuapp.com/api/music_albums")
      .then(res => {
        console.log(res.data);
        this.setState({ cards: res.data });
      });
  }

  renderCards = () => {
    const { cards } = this.state;
    return cards.map(card => <CardDetail key={card.title} card={card} />);
  };

  render() {
    return <View>{this.renderCards()}</View>;
  }
}

export default CardsPage;
