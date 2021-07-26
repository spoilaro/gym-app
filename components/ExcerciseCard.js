import React from "react";
import { View, Text, Image, TouchableOpacity, Touchable } from "react-native";
import { colors, fonts } from "../constants";

const imageUrl =
  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bring-it-all-the-way-up-here-royalty-free-image-1625750638.jpg?crop=0.601xw:0.946xh;0.397xw,0.0103xh&resize=640:*";

export default function ExcerciseCard({ data, navigation }) {
  const goToDetails = () => {
    navigation.navigate("Details", data);
  };

  return (
    <TouchableOpacity onPress={goToDetails}>
      <View
        style={{
          backgroundColor: colors.primary,
          height: 150,
          borderRadius: 10,
          overflow: "hidden",
        }}
      >
        <Image
          source={{ uri: imageUrl }}
          resizeMode="cover"
          style={{ height: "60%", width: "100%" }}
        />
        <View style={{ padding: 10 }}>
          <Text
            style={{
              fontSize: fonts.size.SMALL,
              color: colors.white,
            }}
          >
            {data.name}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
