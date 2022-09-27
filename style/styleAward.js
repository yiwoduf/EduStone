// styleAward.js
// Stylesheet for Award Page

import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from "react-native";

const { width, height } = Dimensions.get("window"); // Retrieve Information of Device Window Size

export default StyleSheet.create({
  safeAV: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#1d2951",
  },
  scrollView: {},
  titleWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    alignSelf: "flex-start",
    borderColor: "#000",
    borderWidth: 2,
    padding: 10,
    marginBottom: 8,
  },
  titleText: {
    color: "#fff",
    fontSize: 16,
    lineHeight: 16,
  },
  badgesWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#000",
    borderWidth: 2,
    marginBottom: 16,
  },
  badge: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    margin: 5,
    minHeight: 80,
    minWidth: 80,
    backgroundColor: "#00ff00",
  },
  sectionTitleWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#000",
    borderWidth: 2,
    padding: 10,
    marginBottom: 8,
  },
  awardSectionWrapper: {
    flexDirection: "column",
    alignItems: "center",
    borderColor: "#000",
    borderWidth: 2,
  },
  award: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    borderColor: "#000",
    borderWidth: 2,
    marginHorizontal: 20,
    marginVertical: 8,
    padding: 10,
  },
  awardImage: {
    minWidth: 30,
    minHeight: 30,
    backgroundColor: "#ffff00",
  },
  awardTitleWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#000",
  },
});
