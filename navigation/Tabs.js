import { View } from "react-native"; // For handling LinearGradient @lee
import LinearGradient from "react-native-linear-gradient";
import appStyles from "../components/appStyles";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Calendar from "../screens/Calendar";
import Todos from "../screens/Todos";
import User from "../screens/User";

const Tab = createBottomTabNavigator();

const Tabs = () => (
  <Tab.Navigator
    initialRouteName="Todos"
    screenOptions={{
      headerShown: false,
      tabBarBackground: () => (
        <View style={{ flex: 1 }}>
          <LinearGradient
            colors={["#242424", "#3a2a31"]}
            style={appStyles.linearGradient}
          ></LinearGradient>
        </View>
      ),
    }}
  >
    <Tab.Screen name="Calendar" component={Calendar} />
    <Tab.Screen name="Todos" component={Todos} />
    <Tab.Screen name="User" component={User} />
  </Tab.Navigator>
);

export default Tabs;
