import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Calendar from "../screens/Calendar";
import Todos from "../screens/Todos";
import User from "../screens/User";

const Tab = createBottomTabNavigator();

const Tabs = () => (
  <Tab.Navigator initialRouteName="Todos" screenOptions={{}}>
    <Tab.Screen name="Calendar" component={Calendar} />
    <Tab.Screen name="Todos" component={Todos} />
    <Tab.Screen name="User" component={User} />
  </Tab.Navigator>
);

export default Tabs;
