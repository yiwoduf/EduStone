import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import appStyles from "../style/appStyles";

const Profile = () => {
  return (
    <View>
      <Image
        style={appStyles.ui}
        source={require("../Design/ui/UI_Profile_iOS.png")}
        resizeMode="contain"
      />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
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
