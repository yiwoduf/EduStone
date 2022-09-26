import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import appStyles from "../style/appStyles";

const Todos = () => {
  return (
    <View>
      <Image
        style={appStyles.ui}
        source={require("../design/ui/UI_ToDoList_iOS.png")}
        resizeMode="contain"
      />
    </View>
  );
};

export default Todos;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1d2951",
  },
  text: {
    color: "#fff",
  },
});
