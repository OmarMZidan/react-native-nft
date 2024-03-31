import { StyleSheet, Text, View } from "react-native";
import { COLORS, SIZES, FONTS } from "../constants";

const NFTDate = ({ date }) => {
  return (
    <View>
      <Text style={styles.textDate}>{date}</Text>
    </View>
  );
};

export default NFTDate;

const styles = StyleSheet.create({
  textDate: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.medium,
    color: COLORS.gray,
  },
});
