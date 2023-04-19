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
  BadgeBox,
  BadgeHistoryContainer,
  BadgeHistoryBox,
  BadgeHistoryTitle,
  BadgeHistoryHeader,
  BadgeHistoryHeaderTitle,
  BadgeHistoryDescription,
  BadgeHistoryTextContainer,
  BadgeHistoryIcon,
  SectionTitle,
  SectionTitleText,
  AwardListContainer,
  AwardComponentContainer,
  AwardImage,
  AwardTitle,
  AwardTitleContainer,
} from "../../style/styleAward";

//data object, we can even store this in the cloud and update it on refresh or smth
import { getLoadingStatus, getUserData } from "../Loading.js";
import { imagesArray } from "../../App";

let temp = false;
let tempU = getUserData();

export function Badges() {
  while(temp == false) {
    temp = getLoadingStatus();
    tempU = getUserData();
    return(null);
  }
  while(temp == true) {
    temp = getLoadingStatus();
    tempU = getUserData();
    return tempU.badges.map(
        (badge) => {
          return (
            <BadgeBox key={badge.key}>
              <BadgeImage source={imagesArray[badge.source]}/>
            </BadgeBox>
          );
        }
      );
  }
}

export function Awards() {
  while(temp == false) {
    temp = getLoadingStatus();
    tempU = getUserData();
    return(null)
  }
  while(temp == true) {
    temp = getLoadingStatus();
    tempU = getUserData();
    return tempU.awards.map(
      (award) => {
        return (
          <BadgeHistoryBox key={award.key}>
            <BadgeHistoryIcon
              source={imagesArray[award.source]}
            />
            <BadgeHistoryTextContainer key={award.key + 1}>
              <BadgeHistoryTitle>{award.component}</BadgeHistoryTitle>
              <BadgeHistoryDescription>test</BadgeHistoryDescription>
            </BadgeHistoryTextContainer>
          </BadgeHistoryBox>
        );
      }
    );
  }
}
