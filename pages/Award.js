import React from "react";
import { View, Text, Image, ScrollView, SafeAreaView } from "react-native";
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
} from "../style/styleAward";

import { Badges, Awards } from "./content_population/AwardPopulation.js";

const Award = () => {
  return (
    <>
      <BackgroundContainer source={require("../design/bg/AwardList_BG.png")} />
      <MainContainer>
        <Header>
          <HeaderTitle>AWARDS & BADGES</HeaderTitle>
        </Header>

        <Badges />

        <SectionTitle>
          <SectionTitleText>AWARD HISTORY</SectionTitleText>
        </SectionTitle>

        <Awards />
      </MainContainer>
    </>
  );
};

export default Award;
