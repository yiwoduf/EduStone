import React from "react";
import {
  MainContainer,
  Header,
  HeaderTitle,
  InformationContainer,
  InfoProfileContainer,
  InfoProfileImage,
  InfoProfileName,
  InfoDescriptionContainer,
  InfoCol,
  InfoMenuContainer,
  InfoProfileMajor,
  Container,
  InfoProfileDepartment,
  InfoDescriptionRow,
  InfoDescriptionLeftText,
  InfoDescriptionRightText,
  InfoMenuRow,
  InfoMenuCol,
  InfoMenuText,
  InfoButton,
  InfoButtonText,
} from "../style/styleProfile";
import { useNavigation } from "@react-navigation/native";

const profileData = [
  { leftText: "STUDENT OF", rightText: "UNIVERSITY OF KANSAS" },
  { leftText: "EMAIL", rightText: "JAYHAWK@KU.EDU" },
  { leftText: "DOB", rightText: "00.00.0000" },
  { leftText: "STUDENT ID", rightText: "0000000" },
  { leftText: "CREDIT HR", rightText: "15 CRD" },
  { leftText: "BADGE COUNT", rightText: "16" },
  { leftText: "TOTAL POINTS", rightText: "23456 PTS" },
];

const menuData = [
  "GENERAL SETTINGS",
  "NOTIFICATIONS",
  "PREFERENCES",
  "APP GUIDE",
  "REPORT ISSUE",
  "ABOUT EDUSTONE",
];

const Stone = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <MainContainer>
        <Header>
          <HeaderTitle>PROFILE</HeaderTitle>
        </Header>
        <InformationContainer>
          <InfoProfileContainer>
            <InfoProfileImage
              source={require("../design/ui/profile/profile_characters/example.png")}
            />
            <InfoCol>
              <InfoProfileName>TAEYEON KIM</InfoProfileName>
              <InfoProfileDepartment>SCHOOL OF MUSIC</InfoProfileDepartment>
            </InfoCol>
            <InfoProfileMajor>SR</InfoProfileMajor>
          </InfoProfileContainer>
          <InfoDescriptionContainer>
            {profileData.map((data) => (
              <InfoDescriptionRow key={data.leftText}>
                <InfoDescriptionLeftText>
                  {data.leftText}
                </InfoDescriptionLeftText>
                <InfoDescriptionRightText>
                  {data.rightText}
                </InfoDescriptionRightText>
              </InfoDescriptionRow>
            ))}
          </InfoDescriptionContainer>
          <InfoMenuContainer>
            {menuData.map((menu, index) => (
              <InfoMenuRow key={menu} hasBorder={index !== menuData.length - 1}>
                <InfoMenuCol>
                  <InfoMenuText>{menu}</InfoMenuText>
                </InfoMenuCol>
              </InfoMenuRow>
            ))}
          </InfoMenuContainer>
          <InfoButton>
            <InfoButtonText>ACCOUNT SETTINGS</InfoButtonText>
          </InfoButton>
          <InfoButton onPress={() => navigation.navigate("Login")}>
            <InfoButtonText>SIGN OUT</InfoButtonText>
          </InfoButton>
        </InformationContainer>
      </MainContainer>
    </Container>
  );
};

export default Stone;
