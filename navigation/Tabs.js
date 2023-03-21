import React from "react";
import { View, useColorScheme, Image } from "react-native"; // For handling LinearGradient @lee
import {LinearGradient} from 'expo-linear-gradient';
import styleApp from "../style/styleApp";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Calendar from "../pages/Calendar";
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
      initialRouteName="Stone"
      screenOptions={{
        tabBarLabelStyle: isDark ? { color: "white" } : { color: "black" },
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
          height: 90,
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
        name="Calendar"
        component={Calendar}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Image
                source={shopIcon}
                style={{
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
