import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Options, Excercises } from "../screens";
import { TabIcon } from "../components";
import { icons, colors } from "../constants";

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Excercises"
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: colors.primary,
          borderTopColor: "transparent",
          height: 80,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return <TabIcon focused={focused} icon={icons.home} label="Home" />;
          },
        }}
      />
      <Tab.Screen
        name="Excercises"
        component={Excercises}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <TabIcon
                focused={focused}
                icon={icons.excercises}
                label="Excercises"
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Options}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <TabIcon focused={focused} icon={icons.options} label="Options" />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
