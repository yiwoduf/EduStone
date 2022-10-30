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

export const StoneExpContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StoneExpTextCurrent = styled.Text`
  font-family: ${basicFont};
  color: white;
  font-size: ${SCREEN_WIDTH * 0.23}px;
  height: 80px;
  text-shadow-color: #fff;
  text-shadow-opacity: 50%;
  text-shadow-radius: 6px;
`;

export const StoneExpTextMax = styled.Text`
  font-family: ${basicFont};
  color: white;
  font-size: ${SCREEN_WIDTH * 0.1}px;
`;

export const StoneImageContainer = styled.View`
  shadow-color: #ff5bda;
  shadow-opacity: 0.4;
  shadow-radius: 20px;
`;

export const StoneImage = styled.Image`
  margin-top: ${SCREEN_HEIGHT * 0.1}px;
  max-height: ${SCREEN_HEIGHT * 0.27}px;
  max-width: ${SCREEN_WIDTH * 0.35}px;
`;

// export const ExpProgressBarMax = styled.View`
//   width: ${width * 0.13}px;
//   height: ${height * 0.01}px;
//   background-color: #373737;
// `;

// export const ExpProgressBarMax = styled.View`
//   width: ${width * 0.13}px;
//   height: ${height * 0.01}px;
//   background-color: #373737;
// `;

// export const ExpProgressBar = styled(ExpProgressBarMax)`

// `;
