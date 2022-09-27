// StyleTodos.js
// Stylesheet for Todos Page

import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { width, height } = Dimensions.get("window"); // Retrieve Information of Device Window Size

export const MainContainer = styled.View`
  display: flex;
  flex-direction: column;
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
  height: ${height * 0.2}px;
  width: ${width}px;
  padding-left: 10px;
`;

export const HeaderTitle = styled.Text`
  letter-spacing: 2px;
  color: white;
  padding: 10px;
  font-size: 30px;
`;

export const TodoListContainer = styled.View``;
