import React from "react";
import { View, Text, TouchableOpacity, Touchable } from "react-native";
import { colors } from "../constants";

export default function HoverButton() {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: colors.white,
        width: 30,
        height: 30,
      }}
    >
      <Text>+</Text>
    </TouchableOpacity>
  );
}
