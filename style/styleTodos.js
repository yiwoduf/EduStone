// StyleTodos.js
// Stylesheet for Todos Page

import { Dimensions } from "react-native";
import styled from "styled-components/native";

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
  height: ${height * 0.1}px;
  width: ${width}px;
  padding-left: 10px;
`;

export const HeaderTitle = styled.Text`
  letter-spacing: 2px;
  color: white;
  padding-left: 10px;
  font-size: 30px;
`;

export const TodoListContainer = styled.FlatList`
  height: 100%;
  width: ${width * 0.9}px;
`;

export const TodoBox = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: ${width * 0.9}px;
  height: 60px;
  margin-bottom: 12px;
  padding-left: 20px;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const Todo = styled.View``;

export const TodoTitle = styled.Text`
  font-size: 18px;
  color: white;
`;

export const ProcessStatus = styled.View`
  padding-right: 20px;
`;

export const DueDate = styled.Text`
  color: white;
  font-size: 16px;
  letter-spacing: 1px;
`;
