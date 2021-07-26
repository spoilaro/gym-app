import React from "react";
import { View, Text, FlatList, SafeAreaView } from "react-native";
import { ExcerciseCard } from "../components";
import { createStackNavigator } from "@react-navigation/stack";
import { TrainingInfo } from "./";
import { colors } from "../constants";

const dummyData = {
  name: "Vatsa treeni",
  sets: [
    { name: "Vatsat", repeats: 10 },
    { name: "Vatsat", repeats: 10 },
    { name: "Vatsat", repeats: 10 },
  ],
};

const dummyData2 = {
  name: "Jalka treeni",
  sets: [
    { name: "Vatsat", repeats: 10 },
    { name: "Vatsat", repeats: 10 },
    { name: "Vatsat", repeats: 10 },
  ],
};
const data = [dummyData, dummyData2, dummyData, dummyData2];

//MAIN FUNCTION
export default function Excercises({ navigation }) {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Details"
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
      }}
    >
      <Stack.Screen name="List" component={listView} initialParams={data} />
      <Stack.Screen name="Details" component={TrainingInfo} />
    </Stack.Navigator>
  );
}

const listView = ({ route, navigation }) => {
  const renderItem = ({ item }) => (
    <ExcerciseCard navigation={navigation} data={item} />
  );
  return (
    <View style={{ backgroundColor: "#000000", height: "100%", padding: 10 }}>
      <SafeAreaView />
      <FlatList
        data={data}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={{ height: 20 }}></View>}
      />
    </View>
  );
};
