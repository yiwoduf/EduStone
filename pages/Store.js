import React from "react";
import { ScrollView, SafeAreaView } from "react-native";
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
  NoticeContainer,
  NoticeImage,
  NoticeText,
} from "../style/styleStore";

const Store = () => {
  return (
    <>
      <Container>
        <MainContainer>
          <Header>
            <HeaderTitle>STORE</HeaderTitle>
          </Header>
          <ScrollView>
            <NoticeContainer>
              <NoticeText>KU RALLY HOUSE EVENT</NoticeText>
              <NoticeImage
                source={require("../design/ui/store/notice_Image.png")}
              />
            </NoticeContainer>
            <StoneExpContainer>
              <StoneExpTextCurrent>1029</StoneExpTextCurrent>
              <StoneExpTextMax>/2000</StoneExpTextMax>
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
          </ScrollView>
        </MainContainer>
      </Container>
    </>
  );
};

export default Store;
