import React from "react";
import { View, Text, StyleSheet, Image, Dimensions, ScrollView, SafeAreaView, StatusBar } from "react-native";
import appStyles from "../style/appStyles.js";

const Award = () => {
  return (
    // Page Wrapper > Badges Wrapper > Individual Badges
    // In the future, import badges object from backend that contains all of the badges
    // in one single <Badges> element. I know this is possible I've done it I just
    // don't remember how
    // ^ same for awards
    // Things are only copypasted a lot to simulate populated pages
    <SafeAreaView style={styles.safeAV}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.titleWrapper}>
          <Text style={styles.titleText}>AWARDS & BADGES</Text>
        </View>

        <View style={styles.badgesWrapper}>
          <View style={styles.badge}>
            <Text style={styles.text}>Badge</Text>
          </View>
          <View style={styles.badge}>
            <Text style={styles.text}>Badge</Text>
          </View>
          <View style={styles.badge}>
            <Text style={styles.text}>Badge</Text>
          </View>
          <View style={styles.badge}>
            <Text style={styles.text}>Badge</Text>
          </View>
          <View style={styles.badge}>
            <Text style={styles.text}>Badge</Text>
          </View>
          <View style={styles.badge}>
            <Text style={styles.text}>Badge</Text>
          </View>
          <View style={styles.badge}>
            <Text style={styles.text}>Badge</Text>
          </View>
          <View style={styles.badge}>
            <Text style={styles.text}>Badge</Text>
          </View>
        </View>

        <View style={styles.sectionTitleWrapper}>
          <Text style={styles.titleText}>AWARD HISTORY</Text>
        </View>

        <View style={styles.awardSectionWrapper}>
          <View style={styles.award}>
            <View style={styles.awardImage}></View>
            <View style={styles.awardTitleWrapper}>
              <Text style={styles.titleText}>Award</Text>
            </View>
          </View>
          <View style={styles.award}>
            <View style={styles.awardImage}></View>
            <View style={styles.awardTitleWrapper}>
              <Text style={styles.titleText}>Award</Text>
            </View>
          </View>
          <View style={styles.award}>
            <View style={styles.awardImage}></View>
            <View style={styles.awardTitleWrapper}>
              <Text style={styles.titleText}>Award</Text>
            </View>
          </View>
          <View style={styles.award}>
            <View style={styles.awardImage}></View>
            <View style={styles.awardTitleWrapper}>
              <Text style={styles.titleText}>Award</Text>
            </View>
          </View>
          <View style={styles.award}>
            <View style={styles.awardImage}></View>
            <View style={styles.awardTitleWrapper}>
              <Text style={styles.titleText}>Award</Text>
            </View>
          </View>
          <View style={styles.award}>
            <View style={styles.awardImage}></View>
            <View style={styles.awardTitleWrapper}>
              <Text style={styles.titleText}>Award</Text>
            </View>
          </View>
          <View style={styles.award}>
            <View style={styles.awardImage}></View>
            <View style={styles.awardTitleWrapper}>
              <Text style={styles.titleText}>Award</Text>
            </View>
          </View>
          <View style={styles.award}>
            <View style={styles.awardImage}></View>
            <View style={styles.awardTitleWrapper}>
              <Text style={styles.titleText}>Award</Text>
            </View>
          </View>
          <View style={styles.award}>
            <View style={styles.awardImage}></View>
            <View style={styles.awardTitleWrapper}>
              <Text style={styles.titleText}>Award</Text>
            </View>
          </View>
          <View style={styles.award}>
            <View style={styles.awardImage}></View>
            <View style={styles.awardTitleWrapper}>
              <Text style={styles.titleText}>Award</Text>
            </View>
          </View>
          <View style={styles.award}>
            <View style={styles.awardImage}></View>
            <View style={styles.awardTitleWrapper}>
              <Text style={styles.titleText}>Award</Text>
            </View>
          </View>
          <View style={styles.award}>
            <View style={styles.awardImage}></View>
            <View style={styles.awardTitleWrapper}>
              <Text style={styles.titleText}>Award</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Award;

const styles = StyleSheet.create({
  safeAV: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#1d2951"
  },
  scrollView: {

  },
  titleWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    alignSelf: "flex-start",
    borderColor: "#000",
    borderWidth: 2,
    padding: 10,
    marginBottom: 8
  },
  titleText: {
    color: "#fff",
    fontSize: 16,
    lineHeight: 16
  },
  badgesWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#000",
    borderWidth: 2,
    marginBottom: 16
  },
  badge: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    margin: 5,
    minHeight: 100,
    minWidth: 100,
    backgroundColor: "#00ff00"
  },
  sectionTitleWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#000",
    borderWidth: 2,
    padding: 10,
    marginBottom: 8
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
    padding: 10
  },
  awardImage: {
    minWidth: 30,
    minHeight: 30,
    backgroundColor: "#ffff00"
  },
  awardTitleWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "#000"
  },
});
