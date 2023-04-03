import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import styleApp from "../style/styleApp";
import {
  MainContainer,
  Header,
  HeaderTitle,
  StoneExpContainer,
  StoneExpTextCurrent,
  StoneExpTextMax,
  Container,
  PointsContainer,
  PointsText,
  MoreInfoContainer,
  InfoContainer,
  DescriptText,
  AssignmentNumText,
  InfoText,
  AssignmentProgressText,
  ProgressCircle,
} from "../style/styleStone";

const Stone = () => {
  const expValues = { current: 1200, max: 3000 };

  const selectedValue = expValues;
  const percentage = (selectedValue.current / selectedValue.max) * 100;
  return (
    <>
      <Container>
        <MainContainer>
          <Header>
            <HeaderTitle>PROGRESS</HeaderTitle>
          </Header>
          <PointsContainer>
            <PointsText>8105 PTS</PointsText>
          </PointsContainer>
          <StoneExpContainer>
            <ProgressCircle percentage={percentage} />
            <StoneExpTextCurrent>{selectedValue.current}</StoneExpTextCurrent>
            <StoneExpTextMax>/{selectedValue.max}</StoneExpTextMax>
          </StoneExpContainer>
          <MoreInfoContainer>
            <InfoContainer>
              <InfoText>ALMOST THERE!</InfoText>
              <DescriptText>YOUR ASSIGNMENTS DUE THIS WEEK</DescriptText>
            </InfoContainer>
            <AssignmentNumText>2</AssignmentNumText>
          </MoreInfoContainer>
          <MoreInfoContainer>
            <InfoContainer>
              <InfoText>JUST "A" STUDENT</InfoText>
              <DescriptText>KEEP UP THE GOOD WORK!</DescriptText>
            </InfoContainer>
            <AssignmentProgressText>96%</AssignmentProgressText>
          </MoreInfoContainer>
        </MainContainer>
      </Container>
    </>
  );
};

export default Stone;
