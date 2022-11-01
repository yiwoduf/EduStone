// StyleTodos.js
// Stylesheet for Todos Page

import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { basicFont, contentFontSize } from "./fonts";

const { width, height } = Dimensions.get("window"); // Retrieve Information of Device Window Size

export const MainContainer = styled.SafeAreaView`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  height: ${height}px;
  width: ${width}px;
`;

export const BackgroundContainer = styled.Image`
  position: absolute;
  z-index: -1;
  max-height: ${height}px;
  max-width: ${width}px;
`;

export const Header = styled.View`
  display: flex;
  justify-content: center;
  height: ${height * 0.08}px;
  width: ${width}px;
  padding-left: ${width * 0.03}px;
`;

export const HeaderTitle = styled.Text`
  font-family: ${basicFont};
  letter-spacing: 1px;
  color: white;
  padding-left: ${width * 0.03}px;
  font-size: ${width * 0.07}px;
`;

export const TodoListContainer = styled.FlatList`
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
  width: ${width * 0.89}px;
  height: ${height * 0.065}px;
  margin-top: ${(props) => (props.index > 0 ? height * 0.015 : 0)}px;
  padding-left: ${width * 0.05}px;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 2;
`;

export const AfterBox = styled.View`
  position: absolute;
  top: ${(props) => (props.index > 0 ? 20 : 7)}px;
  left: 5px;
  width: ${width * 0.89}px;
  height: ${height * 0.065}px;
  background-color: rgba(0, 0, 0, 0.25);
  z-index: 1;
`;

export const Todo = styled.View``;

export const TodoTitle = styled.Text`
  font-family: ${basicFont};
  font-size: ${width * contentFontSize}px;
  color: ${(props) => (props.complete ? "white" : "#FF1F2A")};
  opacity: ${(props) => (props.process ? "0.4" : "1")};
`;

export const ProcessStatus = styled.View`
  padding-right: ${width * 0.05}px;
`;

export const DueDate = styled.Text`
  font-family: ${basicFont};
  color: white;
  font-size: ${width * contentFontSize}px;
`;

export const ProgressBar = styled.View`
  width: ${width * 0.13}px;
  height: ${height * 0.01}px;
  background-color: #373737;
`;

export const GradeBar = styled(ProgressBar)`
  width: ${(props) => (props.grade / 100) * width * 0.13}px;
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
  width: ${width * 0.89 + 5}px;
  height: ${height * 0.15}px;
  margin-top: 5px;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 20px 0px 20px 15px;
`;

export const InfoTextWrapper = styled.View`
  width: 100%;
`;

export const InfoText = styled.Text`
  font-family: ${basicFont};
  font-size: ${width * contentFontSize}px;
  color: white;
`;
