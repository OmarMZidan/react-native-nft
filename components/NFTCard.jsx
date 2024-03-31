import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { COLORS, SIZES } from "../constants";
import NFTImage from "./NFTImage";
import NFTAvatars from "./NFTAvatars";
import NFTTitle from "./NFTTitle";
import NFTInfo from "./NFTInfo";
import { useNavigation } from "@react-navigation/native";

const NFTCard = ({ item }) => {
  const { image, avatars, name, creator, date, comments, views, price } = item;
  const navigation = useNavigation();
  const pressHandler = () => {
    navigation.navigate("NFT-details", { item });
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={pressHandler}>
        <NFTImage image={image} imageStyles={styles.imageStyles} />
      </TouchableOpacity>
      <View style={styles.cardTop}>
        <NFTAvatars avatars={avatars} />
      </View>
      <View style={styles.cardBottom}>
        <NFTTitle _name={name} creator={creator} date={date} />
        <View style={{ marginTop: SIZES.small + 5 }}>
          <NFTInfo comments={comments} views={views} price={price} love />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NFTCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.cardBg,
    borderRadius: SIZES.medium,
    marginBottom: SIZES.xLarge,
    marginVertical: SIZES.small - 5,
    marginHorizontal: 14,
    padding: 12,
  },
  cardTop: {
    width: "100%",
    paddingHorizontal: SIZES.medium,
    marginTop: -30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardBottom: { width: "100%", padding: SIZES.medium },
  imageStyles: {
    width: "100%",
    height: 300,
    borderRadius: 30,
  },
});
