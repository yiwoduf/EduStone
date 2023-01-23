import React, { useState, useCallback, useEffect } from "react";
import * as Font from "expo-font";
import { useFonts } from "expo-font";
import { Text, Image, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Asset, useAssets } from "expo-asset";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./navigation/Tabs";
import * as SplashScreen from "expo-splash-screen";
import LoggedOutNav from "./navigation/LoggedOutNav";

const loadFonts = (fonts) => fonts.map((font) => Font.loadAsync(font));

export const userData = {
  content: {
    userBadges: [
      {
        key: "testUID0",
        component: "badge0",
        source: require("./design/ui/award/badges/badge_BLUE.png"),
      },
      {
        key: "testUID1",
        component: "badge1",
        source: require("./design/ui/award/badges/badge_GREEN.png"),
      },
      {
        key: "testUID2",
        component: "badge2",
        source: require("./design/ui/award/badges/badge_LPURPLE.png"),
      },
      {
        key: "testUID3",
        component: "badge3",
        source: require("./design/ui/award/badges/badge_PURPLE.png"),
      },
      {
        key: "testUID4",
        component: "badge4",
        source: require("./design/ui/award/badges/badge_RED.png"),
      },
      {
        key: "testUID5",
        component: "badge5",
        source: require("./design/ui/award/badges/badge_TEAL.png"),
      },
      {
        key: "testUID6",
        component: "badge6",
        source: require("./design/ui/award/badges/badge_WHITE.png"),
      },
      {
        key: "testUID7",
        component: "badge7",
        source: require("./design/ui/award/badges/badge_YELLOW.png"),
      },
    ],
    userAwards: [
      {
        key: "awardUID0",
        component: "award0",
        source: require("./design/ui/award/achievements/achievement_circle.png"),
      },
      {
        key: "awardUID1",
        component: "award1",
        source: require("./design/ui/award/achievements/achievement_circle.png"),
      },
      {
        key: "awardUID2",
        component: "award2",
        source: require("./design/ui/award/achievements/achievement_circle.png"),
      },
      {
        key: "awardUID3",
        component: "award3",
        source: require("./design/ui/award/achievements/achievement_circle.png"),
      },
      {
        key: "awardUID4",
        component: "award4",
        source: require("./design/ui/award/achievements/achievement_circle.png"),
      },
      {
        key: "awardUID5",
        component: "award5",
        source: require("./design/ui/award/achievements/achievement_circle.png"),
      },
      {
        key: "awardUID6",
        component: "award6",
        source: require("./design/ui/award/achievements/achievement_circle.png"),
      },
      {
        key: "awardUID7",
        component: "award7",
        source: require("./design/ui/award/achievements/achievement_circle.png"),
      },
    ],
  },
};

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [ready, setReady] = useState(false);
  const [fontsLoaded] = useFonts({
    BEMIN: require("./design/fonts/BMDOHYEON_ttf.ttf"),
    NexaBold: require("./design/fonts/NexaTextDemo-Bold.ttf"),
    NexaLight: require("./design/fonts/NexaTextDemo-Light.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        // await Font.loadAsync(Ionicons.font);
        const fontsToLoad = [Ionicons.font];
        const fontPromises = fontsToLoad.map((font) => Font.loadAsync(font));
        const imagesToLoad = [
          require("./design/ui/award/badges/badge_BLUE.png"),
          require("./design/ui/award/badges/badge_GREEN.png"),
          require("./design/ui/award/badges/badge_LPURPLE.png"),
          require("./design/ui/award/badges/badge_PURPLE.png"),
          require("./design/ui/award/badges/badge_RED.png"),
          require("./design/ui/award/badges/badge_TEAL.png"),
          require("./design/ui/award/badges/badge_WHITE.png"),
          require("./design/ui/award/badges/badge_YELLOW.png"),
          require("./design/bg/AwardList_BG.png"),
          require("./design/bg/Profile_BG.png"),
          require("./design/bg/Stone_BG.png"),
          require("./design/bg/ToDoList_BG.png"),
          require("./design/ui/profile/profile_characters/example.png"),
          require("./design/ui/profile/menus/icon_about.png"),
          require("./design/ui/profile/menus/icon_guide.png"),
          require("./design/ui/profile/menus/icon_notifications.png"),
          require("./design/ui/profile/menus/icon_report.png"),
          require("./design/ui/profile/menus/icon_theme.png"),
          require("./design/ui/stone/stones/heart_stone.png"),
          require("./design/ui/UI_Calendar_iOS.png"),
        ];
        const imagePromises = imagesToLoad.map((image) =>
          Asset.loadAsync(image)
        );
        await Promise.all([...fontPromises, ...imagePromises]);
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (ready && fontsLoaded) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [ready, fontsLoaded]);

  if (!ready) {
    return null;
  }

  onLayoutRootView.call();

  return (
    <NavigationContainer {...this}>
      {/* <LoggedOutNav /> */}
      <Tabs />
    </NavigationContainer>
  );
}
