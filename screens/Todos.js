import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Todos = () => {
  return(
    <View style={styles.wrapper}>
      <Text style={styles.text}>Todos</Text>
    </View>
  );
}

export default Todos;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1d2951"
  },
  text: {
    color: "#fff"
  }
});