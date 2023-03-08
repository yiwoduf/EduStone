import React from "react";
import { ScrollView, SafeAreaView } from "react-native";
import {
  MainContainer,
  Header,
  HeaderTitle,
  Container,
  MoreInfoContainer,
  InfoContainer,
  DescriptText,
  AssignmentNumText,
  InfoText,
  AssignmentProgressText,
  NoticeContainer,
  NoticeImage,
  NoticeText,
  SectionTitle,
  MarketContainer,
  Item,
  Center,
} from "../style/styleStore";

const Store = () => {
  return (
    <>
      <Container>
        <MainContainer>
          <Header>
            <HeaderTitle>STORE</HeaderTitle>
          </Header>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Center>
              <NoticeContainer>
                <NoticeText>KU RALLY HOUSE EVENT</NoticeText>
                <NoticeImage
                  source={require("../design/ui/store/notice_Image.png")}
                />
              </NoticeContainer>
            </Center>
            <SectionTitle>BEAKEM BUCKS</SectionTitle>
            <MarketContainer>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <Item />
                <Item />
                <Item />
                <Item />
              </ScrollView>
            </MarketContainer>
            <SectionTitle>GAME TICKETS</SectionTitle>
            <MarketContainer>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <Item />
                <Item />
                <Item />
                <Item />
              </ScrollView>
            </MarketContainer>
            <SectionTitle>PARKING PERMIT</SectionTitle>
            <MarketContainer>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <Item />
                <Item />
                <Item />
                <Item />
              </ScrollView>
            </MarketContainer>
          </ScrollView>
        </MainContainer>
      </Container>
    </>
  );
};

export default Store;
