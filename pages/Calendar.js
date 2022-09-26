import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Calendar = () => {
  return(
    <View style={styles.wrapper}>
      <Text style={styles.text}>Calendar</Text>
    </View>
  );
}

export default Calendar;

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
