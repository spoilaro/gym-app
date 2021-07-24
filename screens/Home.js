import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colors, icons, fonts } from "../constants";
import { CustomButton } from "../components";
import AppLoading from "expo-app-loading";

import { Montserrat_400Regular, useFonts } from "@expo-google-fonts/montserrat";

const image = { uri: require("../assets/weights.jpg") };

export default function Home({ navigation }) {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
  });

  const goToExcercises = () => {
    navigation.navigate("Excercises");
  };

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ height: "100%" }}>
        <ImageBackground
          source={image}
          resizeMode="cover"
          style={{ flex: 1, justifyContent: "flex-end" }}
        >
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={[colors.transparent, "#000000"]}
            style={{ height: 250, justifyContent: "flex-end", padding: 10 }}
          >
            <Text
              style={{
                color: colors.white,
                fontSize: fonts.size.LARGE,
                //fontWeight: fonts.weight.HEAVY,
                fontFamily: "Montserrat_400Regular",
              }}
            >
              Train smarter
            </Text>
            <View>
              <CustomButton onPress={goToExcercises} label={"Start Training"} />
            </View>
          </LinearGradient>
        </ImageBackground>
      </View>
    );
  }
}
