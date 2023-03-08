import React from "react";
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
  NoticeContainer,
  DescriptText,
  AssignmentNumText,
  NoticeText,
  AssignmentProgressText,
} from "../style/styleStore";

const Calendar = () => {
  return (
    <>
      <Container>
        <MainContainer>
          <Header>
            <HeaderTitle>PROGRESS</HeaderTitle>
          </Header>
          <PointsContainer>
            <PointsText> 8105 PTS</PointsText>
          </PointsContainer>
          <StoneExpContainer>
            <StoneExpTextCurrent>1029</StoneExpTextCurrent>
            <StoneExpTextMax>/2000</StoneExpTextMax>
          </StoneExpContainer>
          <MoreInfoContainer>
            <NoticeContainer>
              <NoticeText>ALMOST THERE!</NoticeText>
              <DescriptText>YOUR ASSIGNMENTS DUE THIS WEEK</DescriptText>
            </NoticeContainer>
            <AssignmentNumText>2</AssignmentNumText>
          </MoreInfoContainer>
          <MoreInfoContainer>
            <NoticeContainer>
              <NoticeText>JUST "A" STUDENT</NoticeText>
              <DescriptText>KEEP UP THE GOOD WORK!</DescriptText>
            </NoticeContainer>
            <AssignmentProgressText>96%</AssignmentProgressText>
          </MoreInfoContainer>
        </MainContainer>
      </Container>
    </>
  );
};

export default Calendar;
