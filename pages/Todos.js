import React, { useCallback } from "react";
import styleApp from "../style/styleApp";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
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
  PopupInfo,
  InfoText,
  InfoTextWrapper,
} from "../style/styleTodos";
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from "accordion-collapse-react-native";

const Todos = () => {
  return (
    <>
      <BackgroundContainer source={require("../design/bg/ToDoList_BG.png")} />
      <MainContainer>
        <Header>
          <HeaderTitle>TO-DO LIST</HeaderTitle>
        </Header>
        <TodoListContainer
          data={[
            {
              key: "In Class Problem #1",
              process: true,
              complete: true,
              graded: false,
            },
            {
              key: "In Class Problem #2",
              process: true,
              complete: true,
              graded: false,
            },
            {
              key: "In Class Problem #3",
              process: true,
              complete: true,
              graded: false,
            },
            {
              key: "In Class Problem #4",
              process: true,
              complete: true,
              graded: true,
            },
            {
              key: "In Class Problem #5",
              process: true,
              complete: false,
              graded: false,
            },
            {
              key: "In Class Problem #6",
              process: false,
              complete: false,
              graded: false,
            },
          ]}
          contentContainerStyle={{ flexGrow: 1, alignItems: "center" }}
          renderItem={({ item, index }) => (
            <>
              <Collapse>
                <CollapseHeader>
                  <TodoBox index={index}>
                    <Todo>
                      <TodoTitle>{item.key}</TodoTitle>
                    </Todo>
                    <ProcessStatus>
                      {item.process ? (
                        item.complete ? (
                          item.graded ? (
                            <ProgressBar>
                              <GradeBar grade="50"></GradeBar>
                            </ProgressBar>
                          ) : (
                            <Ionicons
                              name="md-checkmark-sharp"
                              color="#3DFE0B"
                              size={30}
                            />
                          )
                        ) : (
                          <Ionicons name="close" color="#FF1F2A" size={30} />
                        )
                      ) : (
                        <DueDate>09.01</DueDate>
                      )}
                    </ProcessStatus>
                  </TodoBox>
                  <AfterBox index={index} />
                </CollapseHeader>
                <CollapseBody>
                  <PopupInfo>
                    <InfoTextWrapper>
                      <InfoText>Due: Sun Sep 4, 2022 11:59PM</InfoText>
                      <InfoText>Submitted: Sep 4, 2022 8:30PM</InfoText>
                    </InfoTextWrapper>
                    <InfoTextWrapper>
                      <InfoText>Attempt 1 Score: NOT GRADED</InfoText>
                      <InfoText>POINTS EARNED: N/A</InfoText>
                    </InfoTextWrapper>
                  </PopupInfo>
                </CollapseBody>
              </Collapse>
            </>
          )}
        ></TodoListContainer>
      </MainContainer>
    </>
  );
};

export default Todos;
