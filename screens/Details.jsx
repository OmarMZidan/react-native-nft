import { View, SafeAreaView, StyleSheet, Animated } from "react-native";
import { COLORS, SIZES } from "../constants";
import React, { useEffect, useRef } from "react";
import NFTImage from "../components/NFTImage";
import NFTAvatars from "../components/NFTAvatars";
import NFTTitle from "../components/NFTTitle";
import NFTInfo from "../components/NFTInfo";
import NFTMoreinfo from "../components/NFTMoreInfo";
import BidButton from "../components/BidButton";

const NFTDetails = ({ route, navigation }) => {
  const { item } = route.params;
  const {
    image,
    avatars,
    name,
    creator,
    date,
    comments,
    views,
    price,
    address,
    tokenId,
    tokenSt,
    blockchain,
    topBid,
  } = item;
  const moveAnimation = useRef(new Animated.Value(0)).current;

  //go back to home screen
  const pressHandler = () => {
    navigation.goBack();
  };
  //animation handler
  const moveAnimationHandler = () => {
    Animated.spring(moveAnimation, {
      toValue: 1,
      friction: 6,
      tension: 80,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    moveAnimationHandler();
  }, [moveAnimationHandler]);
  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={{
          flex: 1,
          transform: [
            {
              translateY: moveAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [200, 0],
              }),
            },
          ],
        }}
      >
        <NFTImage
          image={image}
          imageStyles={styles.imageStyles}
          love
          arrow
          pressHandler={pressHandler}
        />
        <View style={{ paddingHorizontal: SIZES.xLarge }}>
          <View style={{ marginTop: -SIZES.xLarge }}>
            <NFTAvatars avatars={avatars} />
          </View>
          <View style={styles.wrapper}>
            <NFTTitle _name={name} creator={creator} date={date} />
          </View>
          <View style={styles.wrapper}>
            <NFTInfo price={price} views={views} comments={comments} />
          </View>
          <View style={styles.wrapper}>
            <NFTMoreinfo
              address={address}
              tokenId={tokenId}
              tokenSt={tokenSt}
              blockchain={blockchain}
            />
          </View>
        </View>
        <BidButton topBid={topBid} />
      </Animated.View>
    </SafeAreaView>
  );
};

export default NFTDetails;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg },

  imageStyles: {
    width: "100%",
    height: 400,
    borderRadius: 20,
  },
  wrapper: {
    marginVertical: SIZES.medium,
  },
});
