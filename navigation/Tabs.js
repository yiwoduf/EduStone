import { View } from "react-native"; // For handling LinearGradient @lee
import LinearGradient from "react-native-linear-gradient";
import appStyles from "../components/appStyles";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { useColorScheme } from "react-native"; // @jinu
import Calendar from "../screens/Calendar";
import Todos from "../screens/Todos"
import Stone from "../screens/Stone";
import Profile from "../screens/Profile";
import Award from "../screens/Award";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const isDark = useColorScheme() === "dark";
  return (
    <Tab.Navigator
      initialRouteName="Stone"
      screenOptions={{
        tabBarLabelStyle: isDark ? { color: "white" } : { color: "black" },
        headerShown: false,
        tabBarBackground: () => {
          return isDark ? (
            <View style={{ flex: 1 }}>
              <LinearGradient
                colors={["#242424", "#3a2a31"]}
                style={appStyles.linearGradient}
              ></LinearGradient>
            </View>
          ) : (
            <View style={{ flex: 1 }}>
              <LinearGradient
                colors={["#f6fff8", "#ffe5d9"]}
                style={appStyles.linearGradient}
              ></LinearGradient>
            </View>
          );
        },
      }}
    >
      <Tab.Screen name="Calendar" component={Calendar} />
    <Tab.Screen name="Todos" component={Todos} />
    <Tab.Screen name="Stone" component={Stone} />
    <Tab.Screen name="Profile" component={Profile} />
    <Tab.Screen name="Award" component={Award} />
    </Tab.Navigator>
  );
};

export default Tabs;
