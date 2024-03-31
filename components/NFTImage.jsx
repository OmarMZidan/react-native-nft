import React from "react";
import { View, Text, StyleSheet, StatusBar, Image } from "react-native";
import { COLORS, SIZES } from "../constants";

const NFTImage = ({ image, imageStyles }) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={imageStyles} resizeMode="cover" />
    </View>
  );
};

export default NFTImage;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "relative",
  },

  buttonHeart: {
    position: "absolute",
    top: StatusBar.currentHeight + 10,
    right: 10,
    backgroundColor: COLORS.white,
    padding: 10,
    borderRadius: 40,
  },
  buttonArrow: {
    position: "absolute",
    top: StatusBar.currentHeight + 10,
    left: 10,
    backgroundColor: COLORS.white,
    padding: 10,
    borderRadius: 40,
  },
});
