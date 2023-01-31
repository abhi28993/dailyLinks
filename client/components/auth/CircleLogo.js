import React from "react";
import { View, Image } from "react-native";

const CircleLogo = () => (
  <View
    style={{
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Image
      source={require("../../assets/images/logo.png")}
      style={{ width: 160, height: 78, marginVertical: 20, justifyContent:"center" }}
    />
  </View>
);

export default CircleLogo;