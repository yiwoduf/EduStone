import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import styleApp from "../style/styleApp";
import {
  MainContainer,
  Header,
  HeaderTitle,
  BackgroundContainer,
  StoneExpContainer,
  StoneExpTextCurrent,
  StoneExpTextMax,
  StoneImageContainer,
  StoneImage,
} from "../style/styleStone";

const Stone = () => {
  return (
    <>
      <BackgroundContainer source={require("../design/bg/Stone_BG.png")} />
      <MainContainer>
        <Header>
          <HeaderTitle>STONE PROGRESS</HeaderTitle>
        </Header>
        <StoneExpContainer>
          <StoneExpTextCurrent>1029</StoneExpTextCurrent>
          <StoneExpTextMax>/2000</StoneExpTextMax>
        </StoneExpContainer>
        <StoneImageContainer>
          <StoneImage
            source={require("../design/ui/stone/stones/example.png")}
          />
        </StoneImageContainer>
      </MainContainer>
    </>
  );
};

export default Stone;
