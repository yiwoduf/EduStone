import React from "react";
import { View, useColorScheme, Image } from "react-native"; // For handling LinearGradient @lee
import { LinearGradient } from "expo-linear-gradient";
import styleApp from "../style/styleApp";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Store from "../pages/Store";
import Todos from "../pages/Todos";
import Stone from "../pages/Stone";
import Profile from "../pages/Profile";
import Award from "../pages/Award";
import shopIcon from "../design/navBarIcons/shop.png";
import todoIcon from "../design/navBarIcons/todo.png";
import assignmentsIcon from "../design/navBarIcons/assignments.png";
import profileIcon from "../design/navBarIcons/profile.png";
import awardsIcon from "../design/navBarIcons/awards.png";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const isDark = useColorScheme() === "dark";
  return (
    <Tab.Navigator
      initialRouteName="Store"
      screenOptions={{
        tabBarLabelStyle: isDark ? { color: "white" } : { color: "black" },
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
          height: 82,
          borderRadius: 30,
          overflow: "hidden",
          position: "absolute",
        },
        tabBarActiveTintColor: "#f9bd3c",
        tabBarShowLabel: false,
        headerShown: false, // remove Header on top
        tabBarBackground: () => {
          return isDark ? (
            <View style={{ flex: 1 }}>
              <LinearGradient
                colors={["#f8f8f8", "#f8f8f8"]}
                style={styleApp.linearGradient}
              ></LinearGradient>
            </View>
          ) : (
            <View style={{ flex: 1 }}>
              <LinearGradient
                colors={["#f8f8f8", "#f8f8f8"]}
                style={styleApp.linearGradient}
              ></LinearGradient>
            </View>
          );
        },
      }}
    >
      <Tab.Screen
        name="Store"
        component={Store}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Image
                source={shopIcon}
                style={{
                  marginTop: 17,
                  width: 25,
                  height: 25,
                  tintColor: color,
                  resizeMode: "contain",
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Todos"
        component={Todos}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Image
                source={todoIcon}
                style={{
                  marginTop: 17,
                  width: 25,
                  height: 25,
                  tintColor: color,
                  resizeMode: "contain",
                }}
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
            return (
              <Image
                source={assignmentsIcon}
                style={{
                  marginTop: 17,
                  width: 25,
                  height: 25,
                  tintColor: color,
                  resizeMode: "contain",
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Award"
        component={Award}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Image
                source={awardsIcon}
                style={{
                  marginTop: 17,
                  width: 25,
                  height: 25,
                  tintColor: color,
                  resizeMode: "contain",
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Image
                source={profileIcon}
                style={{
                  marginTop: 17,
                  width: 25,
                  height: 25,
                  tintColor: color,
                  resizeMode: "contain",
                }}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
