import { View, Text, Animated, StyleSheet } from "react-native";
import React, { useEffect, useRef } from "react";
import { COLORS, SIZES, FONTS } from "../constants";
import { FontAwesome } from "@expo/vector-icons";
import Button from "./Button";

const BidButton = ({ topBid }) => {
  const fadeAnimation = useRef(new Animated.Value(0)).current;
  const fadeAnimationHandler = () => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 1000,
      delay: 300,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    fadeAnimationHandler();
  }, [fadeAnimationHandler]);
  return (
    <Animated.View
      style={[
        styles.buttonContainer,
        {
          opacity: fadeAnimation,
        },
      ]}
    >
      <View style={styles.wrapper}>
        <View>
          <Text style={styles.text}>Top bid</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 2,
              padding: SIZES.small - 4,
            }}
          >
            <FontAwesome name="dollar" size={15} color="white" />
            <Text style={styles.text}>{topBid}</Text>
          </View>
        </View>
        <Button
          title="Place a bid"
          stylesButton={styles.button}
          stylesText={styles.textButton}
        />
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: SIZES.medium,
    fontFamily: FONTS.semiBold,
    color: COLORS.white,
  },
  buttonContainer: {
    width: "100%",
    position: "absolute",
    bottom: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  wrapper: {
    backgroundColor: COLORS.cardBg,
    width: 300,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    borderRadius: 20,
  },
  button: {
    backgroundColor: COLORS.second,
    padding: 16,
    width: 150,
    borderRadius: 20,
  },
  textButton: {
    color: COLORS.white,
    textAlign: "center",
    fontFamily: FONTS.semiBold,
    fontSize: 16,
  },
});

export default BidButton;
