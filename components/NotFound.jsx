import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";

const NotFound = () => {
  return (
    <View style={styles.notFoundContainer}>
      <Text style={styles.notFoundText}>Opps... ! </Text>
      <Text style={styles.notFoundText}> Not found the NFT</Text>
    </View>
  );
};

export default NotFound;

const styles = StyleSheet.create({
  notFoundContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: SIZES.xLarge,
  },
  notFoundText: {
    color: COLORS.white,
    fontFamily: FONTS.bold,
    fontSize: SIZES.xLarge,
  },
});
