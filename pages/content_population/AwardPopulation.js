import React from "react";
import { View, Text, Image, ScrollView, SafeAreaView } from "react-native";
import styledComponentsNative from "styled-components/native";
import {
  BackgroundContainer,
  MainContainer,
  Header,
  HeaderTitle,
  BadgeContainer,
  BadgeImage,
  SectionTitle,
  SectionTitleText,
  AwardListContainer,
  AwardComponentContainer,
  AwardImage,
  AwardTitle,
  AwardTitleContainer,
} from "../../style/styleAward";

//data object, we can even store this in the cloud and update it on refresh or smth
import { userData, isLoaded } from "../Loading.js";

export function Badges() {
  while(!isLoaded) {
    return(NULL);
  }
  return (
    <BadgeContainer>
      {userData.badges.map((badge) => (
        <BadgeImage source={badge.source} />
      ))}
    </BadgeContainer>
  );
}

export function Awards() {
  while(!isLoaded) {
    return(NULL);
  }
  return (
    <ScrollView>
      {userData.awards.map((award) => (
        <AwardComponentContainer key={award.key}>
          {/* <AwardImage source={require(award.source)} /> */}
          <AwardImage source={award.source} />
          <AwardTitleContainer>
            <AwardTitle>{award.component}</AwardTitle>
          </AwardTitleContainer>
        </AwardComponentContainer>
      ))}
    </ScrollView>
  );
}
