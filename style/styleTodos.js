// StyleTodos.js
// Stylesheet for Todos Page

import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { width, height } = Dimensions.get("window"); // Retrieve Information of Device Window Size

export const MainContainer = styled.View`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding-top: 15px;
`;

export const BackgroundContainer = styled.Image``;

export const Header = styled.View`
  display: flex;
  justify-content: center;
  height: ${height * 0.1};
  width: ${width};
  padding-left: 10px;
`;

export const HeaderTitle = styled.Text``;

export const TodoListContainer = styled.View``;
