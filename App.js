import React, { useState, useCallback, useEffect } from "react";
import * as Font from "expo-font";
import { useFonts } from "expo-font";
import { Text, Image, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Asset, useAssets } from "expo-asset";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./navigation/Tabs";
import * as SplashScreen from "expo-splash-screen";

const loadFonts = (fonts) => fonts.map((font) => Font.loadAsync(font));

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [ready, setReady] = useState(false);
  const [fontsLoaded] = useFonts({
    DungGeunMo: require("./design/fonts/DungGeunMo.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        // await Font.loadAsync(Ionicons.font);
        const fonts = loadFonts([Ionicons.font]);
        await Promise.all([...fonts]);
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
      <Tabs />
    </NavigationContainer>
  );
}
