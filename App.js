import React, { useState, useCallback, useEffect } from "react";
import * as Font from "expo-font";
import { useFonts } from "expo-font";
import { Text, Image, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Asset, useAssets } from "expo-asset";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./navigation/Tabs";
import * as SplashScreen from "expo-splash-screen";
import Login from "./pages/Login";
import Loading from "./pages/Loading";
import { createStackNavigator } from "@react-navigation/stack";

const loadFonts = (fonts) => fonts.map((font) => Font.loadAsync(font));

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

const Stack = createStackNavigator();

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
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Loading"
          component={Loading}
          options={{ headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Tabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
