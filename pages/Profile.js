import React from "react";
import {
  MainContainer,
  Header,
  HeaderTitle,
  BackgroundContainer,
  InformationContainer,
  InfoProfileContainer,
  InfoProfileImage,
  InfoProfileName,
  InfoDescriptionContainer,
  InfoDescriptionLine,
  InfoDescriptionTextLeft,
  InfoDescriptionTextRight,
  InfoMenuContainer,
  MenuRow,
  MenuSingle,
  MenuIcon,
  MenuText,
  InfoProfileMajor,
} from "../style/styleProfile";

const Stone = () => {
  return (
    <>
      <BackgroundContainer source={require("../design/bg/Profile_BG.png")} />
      <MainContainer>
        <Header>
          <HeaderTitle>ACCOUNT & SETTINGS</HeaderTitle>
        </Header>
        <InformationContainer>
          <InfoProfileContainer>
            <InfoProfileImage
              source={require("../design/ui/profile/profile_characters/example.png")}
            />
            <InfoProfileName>David Johnson</InfoProfileName>
            <InfoProfileMajor>EECS</InfoProfileMajor>
          </InfoProfileContainer>
          <InfoDescriptionContainer>
            <InfoDescriptionLine>
              <InfoDescriptionTextLeft>Student Of</InfoDescriptionTextLeft>
              <InfoDescriptionTextRight>
                UNIVERSITY OF KANSAS
              </InfoDescriptionTextRight>
            </InfoDescriptionLine>
            <InfoDescriptionLine>
              <InfoDescriptionTextLeft>Email</InfoDescriptionTextLeft>
              <InfoDescriptionTextRight>
                jayhawk@ku.edu
              </InfoDescriptionTextRight>
            </InfoDescriptionLine>
            <InfoDescriptionLine>
              <InfoDescriptionTextLeft>DOB</InfoDescriptionTextLeft>
              <InfoDescriptionTextRight>00.00.0000</InfoDescriptionTextRight>
            </InfoDescriptionLine>
            <InfoDescriptionLine>
              <InfoDescriptionTextLeft>Student ID</InfoDescriptionTextLeft>
              <InfoDescriptionTextRight>0000000</InfoDescriptionTextRight>
            </InfoDescriptionLine>
            <InfoDescriptionLine>
              <InfoDescriptionTextLeft>Crd Hr</InfoDescriptionTextLeft>
              <InfoDescriptionTextRight>15 Crd Hrs</InfoDescriptionTextRight>
            </InfoDescriptionLine>
            <InfoDescriptionLine>
              <InfoDescriptionTextLeft>Badge Count</InfoDescriptionTextLeft>
              <InfoDescriptionTextRight>00</InfoDescriptionTextRight>
            </InfoDescriptionLine>
          </InfoDescriptionContainer>
          <InfoMenuContainer>
            <MenuRow>
              <MenuSingle>
                <MenuIcon
                  source={require("../design/ui/profile/menus/icon_settings.png")}
                />
                <MenuText>Settings</MenuText>
              </MenuSingle>
              <MenuSingle>
                <MenuIcon
                  source={require("../design/ui/profile/menus/icon_notifications.png")}
                />
                <MenuText>Notice</MenuText>
              </MenuSingle>
            </MenuRow>
            <MenuRow>
              <MenuSingle>
                <MenuIcon
                  source={require("../design/ui/profile/menus/icon_theme.png")}
                />
                <MenuText>Theme</MenuText>
              </MenuSingle>
              <MenuSingle>
                <MenuIcon
                  source={require("../design/ui/profile/menus/icon_guide.png")}
                />
                <MenuText>Guide</MenuText>
              </MenuSingle>
            </MenuRow>
            <MenuRow>
              <MenuSingle>
                <MenuIcon
                  source={require("../design/ui/profile/menus/icon_report.png")}
                />
                <MenuText>Report</MenuText>
              </MenuSingle>
              <MenuSingle>
                <MenuIcon
                  source={require("../design/ui/profile/menus/icon_about.png")}
                />
                <MenuText>About</MenuText>
              </MenuSingle>
            </MenuRow>
          </InfoMenuContainer>
        </InformationContainer>
      </MainContainer>
    </>
  );
};

export default Stone;
