// MainPage.js

import React from "react";
import { Text, Image, View } from "react-native";
import appStyles from "./appStyles";

const MainPage = () => {
  return (
    <View>
      <Image
        style={appStyles.ui}
        source={require("../design/ui/UI_MainPage_iOS.png")}
        resizeMode="contain"
      />
    </View>
  );
};

export default MainPage;
