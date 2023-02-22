// StyleTodos.js
// Stylesheet for Todos Page

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
  colors: ["#EFB14E", "#B880A4", "#AB4BF8"],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  flex: 1;
  justify-content: space-between;
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
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding-left: ${SCREEN_WIDTH * 0.035}px;
  padding-right: ${SCREEN_WIDTH * 0.035}px;
  margin-bottom: ${SCREEN_HEIGHT * 0.025}px;
`;

export const InfoDescriptionRow = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const InfoDescriptionLeftText = styled.Text`
  font-family: ${basicFont};
  color: white;
  font-size: 13px;
`;
export const InfoDescriptionRightText = styled.Text`
  font-family: ${boldFont};
  color: white;
  font-size: 13px;
  letter-spacing: 0.5px;
`;

export const InfoCol = styled.View`
  margin-left: -70px;
`;

export const InfoProfileImage = styled.Image`
  max-height: ${SCREEN_HEIGHT * 0.055}px;
  max-width: ${SCREEN_WIDTH * 0.12}px;
`;

export const InfoProfileName = styled.Text`
  font-family: ${boldFont};
  color: white;
  font-size: ${SCREEN_WIDTH * 0.05}px;
`;

export const InfoProfileDepartment = styled(InfoProfileName)`
  font-family: ${basicFont};
  color: white;
  font-size: ${SCREEN_WIDTH * 0.03}px;
`;

export const InfoProfileMajor = styled.Text`
  font-family: ${specialFont};
  color: white;
  font-size: ${SCREEN_WIDTH * 0.09}px;
`;

export const InfoDescriptionContainer = styled(InfoProfileContainer)`
  flex-direction: column;
  justify-content: space-evenly;
  height: ${SCREEN_HEIGHT * 0.23}px;
  border-radius: 20px;
  padding-top: ${SCREEN_WIDTH * 0.02}px;
  padding-left: ${SCREEN_WIDTH * 0.04}px;
  padding-right: ${SCREEN_WIDTH * 0.04}px;
`;

export const InfoMenuContainer = styled(InfoProfileContainer)`
  height: ${SCREEN_HEIGHT * 0.2}px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
`;

export const InfoMenuRow = styled.View`
  width: 100%;
  border-bottom-width: ${({ hasBorder }) => (hasBorder ? 1 : 0)};
  border-bottom-color: #786074;
`;

export const InfoMenuCol = styled.View``;

export const InfoMenuText = styled.Text`
  font-family: ${basicFont};
  font-size: 16px;
  color: white;
`;

export const InfoButton = styled.TouchableOpacity`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: ${SCREEN_WIDTH * 0.89}px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding-left: ${SCREEN_WIDTH * 0.035}px;
  padding-right: ${SCREEN_WIDTH * 0.035}px;
  margin-bottom: ${SCREEN_HEIGHT * 0.025}px;
  justify-content: center;
  height: ${SCREEN_HEIGHT * 0.06}px;
`;

export const InfoButtonText = styled.Text`
  font-family: ${specialFont};
  color: white;
  letter-spacing: 1.5px;
  font-size: 16px;
`;
