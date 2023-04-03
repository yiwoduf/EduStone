import React from "react";
import { ScrollView } from "react-native";
import {
  MainContainer,
  Header,
  HeaderTitle,
  Container,
  NoticeContainer,
  NoticeImage,
  NoticeText,
  SectionTitle,
  MarketContainer,
  Item,
  Center,
  MarketIamgeContainer,
  SubContainer,
  TransparentContainer,
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
            <SubContainer>
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
            </SubContainer>
          </ScrollView>
        </MainContainer>
      </Container>
    </>
  );
};

export default Store;
