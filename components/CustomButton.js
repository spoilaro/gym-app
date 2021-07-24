import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colors, fonts } from "../constants";
import AppLoading from "expo-app-loading";
import { Montserrat_400Regular, useFonts } from "@expo-google-fonts/montserrat";

export default function CustomButton({ onPress, label }) {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          width: "80%",
          height: 50,
          borderRadius: 10,
          backgroundColor: colors.primary,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: colors.white,
            fontSize: fonts.size.SMALL,
            fontWeight: fonts.weight.MEDIUM,
            fontFamily: "Montserrat_400Regular",
          }}
        >
          {label}
        </Text>
      </TouchableOpacity>
    );
  }
}
