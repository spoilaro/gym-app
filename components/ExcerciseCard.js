import React from "react";
import { View, Text, Image } from "react-native";
import { colors, fonts } from "../constants";

export default function ExcerciseCard() {
  return (
    <View
      style={{
        backgroundColor: colors.primary,
        height: 150,
        borderRadius: 10,
        overflow: "hidden",
      }}
    >
      <Image
        source={{ uri: require("../assets/weights.jpg") }}
        resizeMode="cover"
        style={{ height: "40%", width: "100%" }}
      />
      <View style={{ padding: 10 }}>
        <Text
          style={{
            fontSize: fonts.size.SMALL,
            color: colors.white,
          }}
        >
          Jalka treeni
        </Text>
      </View>
    </View>
  );
}
