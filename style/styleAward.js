// styleAward.js
// Stylesheet for Award Page

import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { basicFont, contentFontSize } from "./fonts";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window"); // Retrieve Information of Device Window Size

export const MainContainer = styled.SafeAreaView`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  height: ${SCREEN_HEIGHT}px;
  width: ${SCREEN_WIDTH}px;
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
  font-family: ${basicFont};
  color: white;
  padding-left: ${SCREEN_WIDTH * 0.03}px;
  font-size: ${SCREEN_WIDTH * 0.07}px;
`;

export const BadgeContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BadgeImage = styled.Image`
  margin: ${SCREEN_WIDTH * 0.03}px;
  justify-content: center;
  align-items: center;
  max-height: ${SCREEN_WIDTH * 0.16}px;
  max-width: ${SCREEN_WIDTH * 0.16}px;
`;

export const SectionTitle = styled.View`
  display: flex;
  height: ${SCREEN_HEIGHT * 0.06}px;
  width: ${SCREEN_WIDTH}px;
  align-items: center;
  margin-top: ${SCREEN_HEIGHT * 0.025}px;
`;

export const SectionTitleText = styled.Text`
  font-family: ${basicFont};
  color: white;
  padding-left: ${SCREEN_WIDTH * 0.03}px;
  font-size: ${SCREEN_WIDTH * 0.06}px;
`;

export const AwardListContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: ${SCREEN_HEIGHT * 0.1}px;
`;

export const AwardComponentContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  height: ${SCREEN_HEIGHT * 0.08}px;
  width: ${SCREEN_WIDTH * 0.93}px;
  margin-bottom: ${SCREEN_WIDTH * 0.03}px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: ${SCREEN_HEIGHT * 0.015}px;
  padding-left: ${SCREEN_WIDTH * 0.05}px;
`;

export const AwardImage = styled.Image`
  width: ${SCREEN_WIDTH * 0.1}px;
  height: ${SCREEN_WIDTH * 0.1}px;
`;

export const AwardTitleContainer = styled.View`
  position: relative;
  display: flex;
  height: ${SCREEN_HEIGHT * 0.08}px;
  width: ${SCREEN_WIDTH * 0.7}px;
  align-items: center;
  justify-content: center;
`;

export const AwardTitle = styled.Text`
  font-family: ${basicFont};
  color: white;
  font-size: ${SCREEN_WIDTH * 0.06}px;
`;
