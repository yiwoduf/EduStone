import React from "react";
import styleApp from "../style/styleApp";
import {
  MainContainer,
  Header,
  HeaderTitle,
  BackgroundContainer,
} from "../style/styleTodos";

const Todos = () => {
  return (
    <MainContainer>
      <BackgroundContainer source={require("../design/bg/ToDoList_BG.png")} />
      <Header>
        <HeaderTitle>To Do List</HeaderTitle>
      </Header>
    </MainContainer>
  );
};

export default Todos;
