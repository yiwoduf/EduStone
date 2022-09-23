// appStyles.js

import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window"); // Retrieve Information of Device Window Size

export default StyleSheet.create({
  ui: {
    maxHeight: height,
    maxWidth: width,
  },
});