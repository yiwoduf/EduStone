// styleApp.js
// App Default Style

import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window"); // Retrieve Information of Device Window Size

export default StyleSheet.create({
  uiOverlay: {
    maxHeight: height,
    maxWidth: width,
  },
  linearGradient: {
    flex: 1,
  },
});
