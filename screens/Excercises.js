import React from "react";
import { View, Text } from "react-native";
import { ExcerciseCard } from "../components";

export default function Excercises() {
  return (
    <View style={{ backgroundColor: "#000000", height: "100%", padding: 10 }}>
      <ExcerciseCard />
    </View>
  );
}
