import { View } from "react-native"; // For handling LinearGradient @lee
import LinearGradient from "react-native-linear-gradient";
import appStyles from "../style/appStyles";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Calendar from "../pages/Calendar";
import Todos from "../pages/Todos";
import Stone from "../pages/Stone";
import Profile from "../pages/Profile";
import Award from "../pages/Award";

const Tab = createBottomTabNavigator();

const Tabs = () => (
  <Tab.Navigator
    initialRouteName="Stone"
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
    <Tab.Screen name="Stone" component={Stone} />
    <Tab.Screen name="Profile" component={Profile} />
    <Tab.Screen name="Award" component={Award} />
  </Tab.Navigator>
);

export default Tabs;
