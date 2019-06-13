import React from "react";
import { Text, View, Image, StyleSheet, Linking } from "react-native";
import Card from "./Card";
import CardSection from "./CardSection";
import Button from "./Button";

const CardDetail = ({ card }) => {
  const { title, artist, thumbnail_image, image, url } = card;
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
          <Image style={thumbNailStyle} />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style={artWorkImage} />
      </CardSection>
      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>Buy Now</Button>
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
    height: 50,
    backgroundColor: "grey"
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
    width: null,
    backgroundColor: "red"
  }
});

export default CardDetail;
