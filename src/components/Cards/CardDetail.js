import React from "react";
import { Text } from "react-native";
import Card from "./Card";

const CardDetail = props => {
  return (
    <Card>
      <Text>{props.card.title}</Text>
    </Card>
  );
};

export default CardDetail;
