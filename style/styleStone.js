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
  colors: ["#9D4EDD", "#BC84E5", "#e89d65"],
  start: { x: 1, y: 0 },
  end: { x: 0, y: 1 },
})`
  flex: 1;
  justify-content: space-between;
`;

export const PointsContainer = styled.View`
  justify-content: center;
  width: ${SCREEN_WIDTH * 0.8}px;
  height: ${SCREEN_HEIGHT * 0.06}px;
  background-color: rgba(0, 0, 0, 0.15);
  border-radius: ${(SCREEN_HEIGHT * 0.06) / 3}px;
  margin-bottom: 20px;
`;

export const PointsText = styled.Text`
  font-family: ${specialFont};
  color: white;
  text-align: center;
  font-size: ${SCREEN_WIDTH * 0.09}px;
  text-shadow-color: #fff;
  text-shadow-opacity: 50%;
  text-shadow-radius: 6px;
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
  align-items: center;
  justify-content: center;
  width: ${SCREEN_WIDTH * 0.8}px;
  height: ${SCREEN_WIDTH * 0.8}px;
  background-color: rgba(0, 0, 0, 0.15);
  border-radius: ${(SCREEN_HEIGHT * 0.06) / 3}px;
  margin-bottom: 20px;
`;

export const StoneExpTextCurrent = styled.Text`
  font-family: ${specialFont};
  color: white;
  font-size: ${SCREEN_WIDTH * 0.18}px;
  height: 80px;
  text-shadow-color: #f8a444;
  text-shadow-opacity: 10%;
  text-shadow-radius: 12px;
`;

export const StoneExpTextMax = styled.Text`
  font-family: ${specialFont};
  color: white;
  font-size: ${SCREEN_WIDTH * 0.1}px;
  margin-top: 10px;
  text-shadow-color: #f8a444;
  text-shadow-opacity: 10%;
  text-shadow-radius: 8px;
`;

export const MoreInfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: ${SCREEN_WIDTH * 0.8}px;
  height: ${SCREEN_HEIGHT * 0.09}px;
  background-color: rgba(0, 0, 0, 0.15);
  border-radius: ${(SCREEN_HEIGHT * 0.06) / 3}px;
  padding: 0px 25px;
  margin: 15px 0px;
`;

export const NoticeContainer = styled.View``;

export const NoticeText = styled.Text`
  font-family: ${boldFont};
  color: white;
  font-size: ${SCREEN_WIDTH * 0.045}px;
`;

export const DescriptText = styled.Text`
  font-family: ${basicFont};
  color: white;
  font-size: ${SCREEN_WIDTH * 0.028}px;
  opacity: 0.8;
`;

export const AssignmentNumText = styled.Text`
  font-family: ${specialFont};
  color: white;
  font-size: ${SCREEN_WIDTH * 0.1}px;
  text-shadow-color: #f8a444;
  text-shadow-opacity: 30%;
  text-shadow-radius: 5px;
`;

export const AssignmentProgressText = styled.Text`
  font-family: ${specialFont};
  color: white;
  font-size: ${SCREEN_WIDTH * 0.07}px;
  text-shadow-color: #f8a444;
  text-shadow-opacity: 30%;
  text-shadow-radius: 5px;
`;

// export const StoneImageContainer = styled.View`
//   shadow-color: #ff5bda;
//   shadow-opacity: 0.4;
//   shadow-radius: 20px;
// `;

// export const StoneImage = styled.Image`
//   margin-top: ${SCREEN_HEIGHT * 0.1}px;
//   max-height: ${SCREEN_HEIGHT * 0.27}px;
//   max-width: ${SCREEN_WIDTH * 0.35}px;
// `;

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
