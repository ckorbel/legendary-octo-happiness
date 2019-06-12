import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import Card from "./Card";
import CardSection from "./CardSection";

const CardDetail = ({ card }) => {
  const { title, artist, thumbnail_image, image } = card;
  const {
    headerContentStyle,
    thumbNailStyle,
    imageContainer,
    headerTextStyle,
    artWorkImage
  } = styles;
  return (
    <Card>
      <CardSection>
        <View style={imageContainer}>
          <Image style={thumbNailStyle} source={{ uri: thumbnail_image }} />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image source={{ uri: image }} style={artWorkImage} />
      </CardSection>
    </Card>
  );
};

const styles = StyleSheet.create({
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around"
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbNailStyle: {
    width: 50,
    height: 50
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10
  },
  artWorkImage: {
    height: 300,
    flex: 1,
    width: null
  }
});

export default CardDetail;
