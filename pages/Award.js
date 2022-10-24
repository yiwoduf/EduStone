import React from "react";
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
import styleApp from "../style/styleApp";
import styles from "../style/styleAward";

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
