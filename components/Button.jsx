import { Text, TouchableOpacity } from "react-native";
import React from "react";

const Button = ({ pressHandler, Icon, stylesText, title, stylesButton }) => {
  //This function is used to render the icon or text
  const RenderIconOrText = () => {
    if (!Icon) {
      return <Text style={stylesText}>{title && title}</Text>;
    } else {
      return Icon;
    }
  };
  return (
    <TouchableOpacity
      style={stylesButton}
      onPress={pressHandler && pressHandler}
    >
      <RenderIconOrText />
    </TouchableOpacity>
  );
};

export default Button;
