import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import styleApp from "../style/styleApp";
import styles from "../style/styleStone";

const Stone = () => {
  return (
    <View>
      <Image
        style={styleApp.uiOverlay}
        source={require("../design/ui/UI_MainPage_iOS.png")}
        resizeMode="contain"
      />
    </View>
  );
};

export default Stone;
