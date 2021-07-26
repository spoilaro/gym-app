import React from "react";
import { View, Text, FlatList } from "react-native";
import { colors, fonts } from "../constants";

const dummyData = {
  name: "Vatsa treeni",
  sets: [
    { name: "Vatsat", repeats: 10 },
    { name: "Vatsat", repeats: 10 },
    { name: "Vatsat", repeats: 10 },
  ],
};

export default function TrainingInfo({ route, navigation }) {
  const renderItem = ({ item }) => (
    <View
      style={{
        backgroundColor: colors.primary,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        borderRadius: 10,
        height: 50,
        paddingHorizontal: 10,
        paddingVertical: 5,
      }}
    >
      <Text
        style={{
          color: colors.white,
          fontSize: fonts.size.SMALL,
          marginRight: "70%",
        }}
      >
        {item.name}
      </Text>
      <Text style={{ color: colors.white, fontSize: fonts.size.SMALL }}>
        {item.repeats}
      </Text>
    </View>
  );

  return (
    <View style={{ backgroundColor: "black", height: "100%", padding: 10 }}>
      <Text
        style={{
          color: colors.white,
          fontSize: fonts.size.MEDIUM,
          fontWeight: fonts.weight.HEAVY,
        }}
      >
        {dummyData.name}
      </Text>
      <FlatList
        data={dummyData.sets}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      />
    </View>
  );
}

//<Text>{route.params.name}</Text>
