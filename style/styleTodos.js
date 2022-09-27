// StyleTodos.js
// Stylesheet for Todos Page

import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window"); // Retrieve Information of Device Window Size

export default StyleSheet.create({
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
