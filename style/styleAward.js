// styleAward.js
// Stylesheet for Award Page

import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { basicFont, boldFont } from "./fonts";
import LinearGradient from "react-native-linear-gradient";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window"); // Retrieve Information of Device Window Size

export const Container = styled(LinearGradient).attrs({
  colors: ["#AF52FA", "#B765E9", "#FFAA20"],
  start: { x: -1, y: 0.5 },
  end: { x: 1, y: 1 },
})`
  flex: 1;
  justify-content: space-between;
`;

export const MainContainer = styled.SafeAreaView`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  height: ${SCREEN_HEIGHT}px;
  width: ${SCREEN_WIDTH}px;
`;

export const Header = styled.View`
  width: 100%;
  padding: ${SCREEN_WIDTH * 0.07}px;
`;

export const HeaderTitle = styled.Text`
  font-family: ${boldFont};
  font-size: 27px;
  color: #ffffff;
`;

export const DefaultContainer = styled.View`
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
  margin-bottom: ${SCREEN_HEIGHT * 0.01}px;
`;

export const BadgeContainer = styled(DefaultContainer)`
  height: ${SCREEN_HEIGHT * 0.22}px;
`;

export const BadgeBox = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${SCREEN_WIDTH * 0.17}px;
  height: ${SCREEN_WIDTH * 0.165}px;
  background-color: white;
  border-radius: 10px;
  margin-right: ${SCREEN_WIDTH * 0.01}px;
  margin-bottom: ${SCREEN_HEIGHT * 0.01}px;
  margin-top: ${SCREEN_HEIGHT * 0.01}px; ;
`;

export const BadgeImage = styled.Image`
  width: 35px;
  height: 40px;
`;

export const BadgeHistoryContainer = styled.View`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const BadgeHistoryBox = styled(DefaultContainer)`
  display: flex;
  justify-content: space-between;
  padding: 5px 40px 0px 10px;
  height: ${SCREEN_HEIGHT * 0.08}px;
  margin-bottom: ${SCREEN_HEIGHT * 0.02}px;
`;

export const BadgeHistoryHeader = styled(Header)`
  align-items: center;
  padding: ${SCREEN_WIDTH * 0.03}px;
  margin-bottom: ${SCREEN_HEIGHT * 0.01}px;
`;

export const BadgeHistoryHeaderTitle = styled(HeaderTitle)`
  font-size: 22px;
`;

export const BadgeHistoryIcon = styled.Image`
  width: 75px;
  height: 80px;
`;

export const BadgeHistoryTextContainer = styled.View``;

export const BadgeHistoryTitle = styled(HeaderTitle)`
  font-size: 20px;
`;

export const BadgeHistoryDescription = styled.Text`
  font-family: ${basicFont};
  color: white;
  font-size: 12px;
`;
