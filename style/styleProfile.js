// StyleTodos.js
// Stylesheet for Todos Page

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

// Main Section Container
export const InformationContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InfoProfileContainer = styled.View`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: ${SCREEN_WIDTH * 0.89}px;
  height: ${SCREEN_HEIGHT * 0.075}px;
  background-color: rgba(0, 0, 0, 0.43);
  border-radius: 10px;
  padding-left: ${SCREEN_WIDTH * 0.035}px;
  padding-right: ${SCREEN_WIDTH * 0.035}px;
  margin-bottom: ${SCREEN_HEIGHT * 0.025}px;
`;

export const InfoProfileImage = styled.Image`
  max-height: ${SCREEN_HEIGHT * 0.055}px;
  max-width: ${SCREEN_WIDTH * 0.12}px;
`;

export const InfoProfileName = styled.Text`
  font-family: ${basicFont};
  color: white;
  font-size: ${SCREEN_WIDTH * 0.063}px;
`;

export const InfoProfileMajor = styled.Text`
  font-family: ${basicFont};
  color: white;
  font-size: ${SCREEN_WIDTH * 0.055}px;
`;

export const InfoDescriptionContainer = styled.View`
  display: flex;
  flex-direction: column;
  width: ${SCREEN_WIDTH * 0.89}px;
  height: ${SCREEN_HEIGHT * 0.25}px;
  background-color: rgba(0, 0, 0, 0.43);
  border-radius: 10px;
  padding-top: ${SCREEN_WIDTH * 0.02}px;
  padding-left: ${SCREEN_WIDTH * 0.04}px;
  padding-right: ${SCREEN_WIDTH * 0.04}px;
  margin-bottom: ${SCREEN_HEIGHT * 0.025}px;
`;

export const InfoDescriptionLine = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: ${SCREEN_WIDTH * 0.005}px;
  margin-bottom: ${SCREEN_HEIGHT * 0.02}px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(255, 255, 255, 0.1);
`;

export const InfoDescriptionTextLeft = styled.Text`
  font-family: ${basicFont};
  color: white;
  font-size: ${SCREEN_WIDTH * 0.038}px;
`;

export const InfoDescriptionTextRight = styled.Text`
  font-family: ${basicFont};
  color: white;
  font-size: ${SCREEN_WIDTH * 0.04}px;
`;

export const InfoMenuContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MenuRow = styled.View`
  display: flex;
  flex-direction: row;
  width: ${SCREEN_WIDTH * 0.89}px;
  justify-content: space-between;
  margin-bottom: ${SCREEN_HEIGHT * 0.015}px;
`;

export const MenuSingle = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: ${SCREEN_WIDTH * 0.44}px;
  height: ${SCREEN_HEIGHT * 0.075}px;
  background-color: rgba(0, 0, 0, 0.43);
  border-radius: 10px;
  padding-left: ${SCREEN_WIDTH * 0.03}px;
  padding-right: ${SCREEN_WIDTH * 0.044}px;
`;

export const MenuIcon = styled.Image`
  max-height: ${SCREEN_HEIGHT * 0.032}px;
  max-width: ${SCREEN_WIDTH * 0.065}px;
`;

export const MenuText = styled.Text`
  font-family: ${basicFont};
  color: white;
  font-size: ${SCREEN_WIDTH * 0.055}px;
`;
