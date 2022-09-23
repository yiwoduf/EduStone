import React from "react";
import { View, Text, StyleSheet } from "react-native";

const User = () => {
  return(
    <View style={styles.wrapper}>
      <Text style={styles.text}>User</Text>
    </View>
  );
}

export default User;

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