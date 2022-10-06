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
  ProgressBar,
  GradeBar,
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
            { key: "In Class Problem #1", process: true, complete: true, graded: false },
            { key: "In Class Problem #2", process: true, complete: true, graded: false },
            { key: "In Class Problem #3", process: true, complete: true, graded: false },
            { key: "In Class Problem #4", process: true, complete: true, graded: true },
            { key: "In Class Problem #5", process: true, complete: false, graded: false },
            { key: "In Class Problem #6", process: false, complete: false, graded: false },
          ]}
          contentContainerStyle={{flexGrow: 1, alignItems: 'center'}}
          renderItem={({ item }) => (
            <>
              <TodoBox>
                <Todo>
                  <TodoTitle>{item.key}</TodoTitle>
                </Todo>
                <ProcessStatus>
                  {item.process ? (
                    item.complete ? (
                      item.graded ? (
                        <ProgressBar><GradeBar grade="80"></GradeBar></ProgressBar>
                      ) : (<Ionicons
                        name="md-checkmark-sharp"
                        color="#3DFE0B"
                        size={30}
                      />)
                    ) : 
                    (<Ionicons
                      name="close"
                      color="#FF1F2A"
                      size={30}
                    />)
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
