import React from "react";
import { View, Text, Image } from "react-native";
import { icons, colors } from "../constants";

export default function TabIcon({ focused, icon, iconStyle, label }) {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        source={icon}
        resizeMode="contain"
        style={{
          width: 25,
          height: 25,
          tintColor: focused ? colors.white : colors.secondary,
          ...iconStyle,
        }}
      />
      <Text
        style={{
          color: focused ? colors.white : colors.secondary,
        }}
      >
        {label}
      </Text>
    </View>
  );
}
