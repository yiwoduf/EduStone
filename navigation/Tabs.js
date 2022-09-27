import React from "react";
import { View, useColorScheme } from "react-native"; // For handling LinearGradient @lee
import { LinearGradient } from "expo-linear-gradient";
import styleApp from "../style/styleApp";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Calendar from "../pages/Calendar";
import Todos from "../pages/Todos";
import Stone from "../pages/Stone";
import Profile from "../pages/Profile";
import Award from "../pages/Award";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const isDark = useColorScheme() === "dark";
  return (
    <Tab.Navigator
      initialRouteName="Stone"
      screenOptions={{
        tabBarLabelStyle: isDark ? { color: "white" } : { color: "black" },
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
        },
        headerShown: false, // remove Header on top
        tabBarBackground: () => {
          return isDark ? (
            <View style={{ flex: 1 }}>
              <LinearGradient
                colors={["#242424", "#3a2a31"]}
                style={styleApp.linearGradient}
              ></LinearGradient>
            </View>
          ) : (
            <View style={{ flex: 1 }}>
              <LinearGradient
                colors={["#f6fff8", "#ffe5d9"]}
                style={styleApp.linearGradient}
              ></LinearGradient>
            </View>
          );
        },
      }}
    >
      <Tab.Screen name="Calendar" component={Calendar} />
      <Tab.Screen
        name="Todos"
        component={Todos}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Ionicons
                name="ios-checkmark-circle-outline"
                color={color}
                size={size}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Stone"
        component={Stone}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            console.log(focused);
            return (
              <Ionicons name="aperture-outline" color={color} size={size} />
            );
          },
        }}
      />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Award" component={Award} />
    </Tab.Navigator>
  );
};

export default Tabs;
