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

export const PointsContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7, // Touchable Opacity Setting
})`
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
  font-family: ${boldFont};
  color: white;
  padding-left: ${SCREEN_WIDTH * 0.03}px;
  font-size: ${SCREEN_WIDTH * 0.07}px;
`;

export const StoneExpContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8, // Touchable Opacity Setting
})`
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

export const MoreInfoContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7, // Touchable Opacity Setting
})`
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

export const InfoContainer = styled.View``;

export const InfoText = styled.Text`
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

export const ProgressRing = styled.View`
  width: ${SCREEN_WIDTH * 0.7}px;
  height: ${SCREEN_WIDTH * 0.7}px;
  border-radius: 500px;
  border-width: 13px;
  border-color: #ffdeb3;
  box-shadow: 0px 0px 10px #e89d65;
  background-color: transparent;
`;

export const Progress = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 500px;
  border-width: 10px;
  border-color: #ffdeb3;
  box-shadow: 0px 0px 20px #e89d65;
`;

export const ProgressBar = ({ progress }) => {
  console.log("progress:", progress);
  const rotateValue = `${progress * 360}deg`;

  return (
    <ProgressRing>
      <Progress style={{ transform: [{ rotate: rotateValue }] }} />
    </ProgressRing>
  );
};

export const RingContainer = styled.View`
  position: absolute;
  z-index: -10000;
`;
