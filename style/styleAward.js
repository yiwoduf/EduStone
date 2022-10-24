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
    // backgroundColor: "#1d2951",
    // backgroundImage: url("../design/bg/AwardList_BG.png"),
  },
  backgroundImageStyle: {
    position: "absolute",
    zIndex: -1,
    maxHeight: height + StatusBar.currentHeight,
    maxWidth: width,
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
    alignItems: "center", //vertical
    justifyContent: "space-evenly", //horizontal
    borderColor: "#000",
    borderWidth: 2,
    marginBottom: 16,
    // maxHeight: "40%",
  },
  badge: {
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    minHeight: width * 0.2,
    minWidth: width * .2,
  },
  badgeImage: {
    height: width * 0.2,
    width: width * .2,
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
    width: width * 0.1,
    height: width * 0.1,
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
