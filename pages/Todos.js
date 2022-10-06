import React from "react";
import styleApp from "../style/styleApp";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";
import {
  MainContainer,
  Header,
  HeaderTitle,
  BackgroundContainer,
  TodoListContainer,
  TodoBox,
  Todo,
  ProcessStatus,
  DueDate,
  TodoTitle,
  AfterBox,
} from "../style/styleTodos";

const Todos = () => {
  return (
    <>
      <BackgroundContainer source={require("../design/bg/ToDoList_BG.png")} />
      <MainContainer>
        <Header>
          <HeaderTitle>To Do List</HeaderTitle>
        </Header>
        <TodoListContainer
          data={[
            { key: "In Class Problem #1", process: true },
            { key: "In Class Problem #2", process: true },
            { key: "In Class Problem #3", process: true },
            { key: "In Class Problem #4", process: true },
            { key: "In Class Problem #5", process: true },
            { key: "In Class Problem #6", process: false },
          ]}
          renderItem={({ item }) => (
            <>
              <TodoBox>
                <Todo>
                  <TodoTitle>{item.key}</TodoTitle>
                </Todo>
                <ProcessStatus>
                  {item.process ? (
                    <Ionicons
                      name="md-checkmark-sharp"
                      color="green"
                      size={24}
                    />
                  ) : (
                    <DueDate>09.01</DueDate>
                  )}
                </ProcessStatus>
              </TodoBox>
              <AfterBox />
            </>
          )}
        ></TodoListContainer>
      </MainContainer>
    </>
  );
};

export default Todos;
