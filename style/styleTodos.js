// StyleTodos.js
// Stylesheet for Todos Page

import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { basicFont, contentFontSize, specialFont, boldFont } from "./fonts";
import LinearGradient from "react-native-linear-gradient";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window"); // Retrieve Information of Device Window Size

export const Container = styled(LinearGradient).attrs({
  colors: ["#F1A23A", "#D99571", "#AB4BF8"],
  start: { x: 1, y: 0 },
  end: { x: 0, y: 1 },
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
  font-size: ${SCREEN_WIDTH * 0.065}px;
`;

export const TodoListContainer = styled.FlatList`
  margin-top: ${SCREEN_HEIGHT * 0.05}px;
  padding-top: ${SCREEN_HEIGHT * 0.05}px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: ${(SCREEN_HEIGHT * 0.15) / 3}px;
  height: 100%;
  width: 100%;
`;

export const TodoBox = styled.View`
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: ${SCREEN_WIDTH * 0.85}px;
  height: ${SCREEN_HEIGHT * 0.1}px;
  margin-top: ${(props) => (props.index > 0 ? SCREEN_HEIGHT * 0.015 : 0)}px;
  padding-left: ${SCREEN_WIDTH * 0.05}px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: ${(SCREEN_HEIGHT * 0.08) / 3}px;
  z-index: 2;
`;

export const Todo = styled.View``;

export const TodoTitle = styled.Text`
  font-family: ${boldFont};
  font-size: ${SCREEN_WIDTH * contentFontSize}px;
  color: white;
`;

export const CourseTitle = styled.Text`
  font-family: ${basicFont};
  font-size: ${SCREEN_WIDTH * 0.04}px;
  color: white;
`;

export const ProcessStatus = styled.View`
  padding-right: ${SCREEN_WIDTH * 0.05}px;
`;

export const DueDate = styled.Text`
  font-family: ${basicFont};
  color: white;
  font-size: ${SCREEN_WIDTH * 0.033}px;
  margin-top: ${SCREEN_HEIGHT * 0.005}px;
`;

export const ProgressBar = styled.View`
  width: ${SCREEN_WIDTH * 0.13}px;
  height: ${SCREEN_HEIGHT * 0.01}px;
  background-color: #373737;
`;

export const GradeBar = styled(ProgressBar)`
  width: ${(props) => (props.grade / 100) * SCREEN_WIDTH * 0.13}px;
  background-color: ${(props) => {
    if (props.grade < 60) {
      return "#FF1F2A";
    } else if (props.grade < 80) {
      return "#FFCD1F";
    } else {
      return "#00DE4E";
    }
  }};
`;

export const PopupInfo = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${SCREEN_WIDTH * 0.89 + 5}px;
  height: ${SCREEN_HEIGHT * 0.15}px;
  margin-top: 5px;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 20px 0px 20px 15px;
`;

export const InfoTextWrapper = styled.View`
  width: 100%;
`;

export const InfoText = styled.Text`
  font-family: ${basicFont};
  font-size: ${SCREEN_WIDTH * contentFontSize}px;
  color: white;
`;

export const SubmissionState = styled.Image`
  max-height: ${SCREEN_HEIGHT * 0.042}px;
  max-width: ${SCREEN_WIDTH * 0.0901}px;
`;
