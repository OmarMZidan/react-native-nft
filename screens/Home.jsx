import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  FlatList,
  Animated,
} from "react-native";
import { COLORS, DATA, FONTS, SIZES } from "../constants";
import { StatusBar } from "react-native";
import NFTCard from "../components/NFTCard";
import HomeHeader from "../components/HomeHeader";
import NotFound from "../components/NotFound";

const Home = () => {
  const [nftsData, setNftsData] = useState(DATA);
  const moveSearchAnimation = useRef(new Animated.Value(0)).current;

  const searchHandler = (value) => {
    if (value) {
      const filteredData = DATA.filter((nft) =>
        nft.name.toLowerCase().includes(value.toLowerCase())
      );
      setNftsData(filteredData);
    } else {
      setNftsData(DATA);
    }
  };

  const searchAnimationHandler = () => {
    Animated.spring(moveSearchAnimation, {
      toValue: 1,
      friction: 4,
      useNativeDriver: true,
    }).start();
  };
  useEffect(() => {
    searchAnimationHandler();
  }, [searchAnimationHandler]);
  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1 }}>
          <Animated.View
            style={{
              top: -100,
              transform: [
                {
                  translateY: moveSearchAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 100],
                  }),
                },
              ],
            }}
          >
            <HomeHeader searchHandler={searchHandler} />
          </Animated.View>
          {!nftsData.length ? (
            <NotFound />
          ) : (
            <FlatList
              data={nftsData}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <NFTCard item={item} />}
            />
          )}
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
    paddingTop: StatusBar.currentHeight + 10,
  },
});
