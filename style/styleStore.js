// styleCalendar.js
// Stylesheet for Market Page

import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { basicFont, contentFontSize, specialFont, boldFont } from "./fonts";
import LinearGradient from "react-native-linear-gradient";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window"); // Retrieve Information of Device Window Size

export const MainContainer = styled.SafeAreaView`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  height: ${SCREEN_HEIGHT}px;
  width: ${SCREEN_WIDTH}px;
`;

export const Container = styled(LinearGradient).attrs({
  colors: ["#9D4EDD", "#BC84E5", "#e89d65"],
  start: { x: 1, y: 0 },
  end: { x: 0, y: 1 },
})`
  flex: 1;
  justify-content: space-between;
`;

export const NoticeContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7, // Touchable Opacity Setting
})`
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  width: ${SCREEN_WIDTH * 0.9}px;
  height: ${SCREEN_HEIGHT * 0.1}px;
  background-color: rgba(0, 0, 0, 0.15);
  border-radius: ${(SCREEN_HEIGHT * 0.06) / 3}px;
  margin-bottom: 40px;
  overflow: hidden;
  shadow-color: #000;
  shadow-opacity: 0.2;
`;

export const Center = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7, // Touchable Opacity Setting
})`
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const NoticeImage = styled.Image`
  position: absolute;
  z-index: -1;
  height: 100%;
  width: 100%;
`;

export const NoticeText = styled.Text`
  position: absolute;
  z-index: 1;
  font-family: ${boldFont};
  color: white;
  padding-left: ${SCREEN_WIDTH * 0.03}px;
  font-size: ${SCREEN_WIDTH * 0.04}px;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
`;

export const BackgroundContainer = styled.Image`
  position: absolute;
  z-index: -1;
  max-height: ${SCREEN_HEIGHT}px;
  max-width: ${SCREEN_WIDTH}px;
`;

export const Header = styled.View`
  display: flex;
  justify-content: center;
  height: ${SCREEN_HEIGHT * 0.08}px;
  width: ${SCREEN_WIDTH}px;
  padding-left: ${SCREEN_WIDTH * 0.03}px;
`;

export const HeaderTitle = styled.Text`
  font-family: ${boldFont};
  color: white;
  padding-left: ${SCREEN_WIDTH * 0.03}px;
  font-size: ${SCREEN_WIDTH * 0.07}px;
`;

export const SectionTitle = styled.Text`
  font-family: ${boldFont};
  color: white;
  padding-left: ${SCREEN_WIDTH * 0.06}px;
  font-size: ${SCREEN_WIDTH * 0.04}px;
`;

export const MarketContainer = styled.View`
  align-items: center;
  justify-content: center;
  height: ${SCREEN_WIDTH * 0.48}px;
`;

export const MarketIamgeContainer = styled.Image`
  max-height: 100%;
  max-width: ${SCREEN_WIDTH * 0.404}px;
`;

export const Item = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8, // Touchable Opacity Setting
})`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: ${SCREEN_WIDTH * 0.37}px;
  height: ${SCREEN_WIDTH * 0.43}px;
  border-radius: ${(SCREEN_HEIGHT * 0.06) / 3}px;
  shadow-color: #000;
  shadow-opacity: 0.2;
  /* shadow-offset: {
    height: -10px;
  } */
  margin: 10px 9px;
`;
