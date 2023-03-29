import React, { useCallback } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  MainContainer,
  Header,
  HeaderTitle,
  TodoListContainer,
  TodoBox,
  Todo,
  ProcessStatus,
  DueDate,
  TodoTitle,
  ProgressBar,
  GradeBar,
  PopupInfo,
  InfoText,
  InfoTextWrapper,
  Container,
  CourseTitle,
  SubmissionState,
} from "../style/styleTodos";
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from "accordion-collapse-react-native";

const Todos = () => {
  return (
    <Container>
      <MainContainer>
        <Header>
          <HeaderTitle>ASSIGNMENTS</HeaderTitle>
        </Header>
        <TodoListContainer
          data={[
            {
              key: "In Class Problem #1",
              course: "EECS 582",
              process: false,
              complete: true,
              graded: false,
            },
            {
              key: "In Class Problem #2",
              course: "EECS 582",
              process: false,
              complete: true,
              graded: false,
            },
            {
              key: "In Class Problem #3",
              course: "EECS 582",
              process: true,
              complete: true,
              graded: false,
            },
            {
              key: "In Class Problem #4",
              course: "EECS 582",
              process: true,
              complete: true,
              graded: true,
            },
            {
              key: "In Class Problem #5",
              course: "EECS 582",
              process: true,
              complete: false,
              graded: false,
            },
            {
              key: "In Class Problem #6",
              course: "EECS 582",
              process: true,
              complete: true,
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
                      <CourseTitle>{item.course}</CourseTitle>
                      <TodoTitle
                        process={item.process}
                        complete={item.complete}
                      >
                        {item.key}
                      </TodoTitle>
                      <DueDate>Due 2023.10.10</DueDate>
                    </Todo>
                    <ProcessStatus>
                      {item.process ? (
                        item.complete ? (
                          item.graded ? (
                            <ProgressBar>
                              <GradeBar grade="70"></GradeBar>
                            </ProgressBar>
                          ) : (
                            <SubmissionState
                              source={require("../design/ui/todo/status_submitted.png")}
                            />
                          )
                        ) : (
                          <SubmissionState
                            source={require("../design/ui/todo/status_not_submitted.png")}
                          />
                        )
                      ) : (
                        <DueDate>09.01</DueDate>
                      )}
                    </ProcessStatus>
                  </TodoBox>
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
    </Container>
  );
};

export default Todos;
