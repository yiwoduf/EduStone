import {
  MainContainer,
  Header,
  HeaderTitle,
  Container,
  BadgeContainer,
  BadgeBox,
  BadgeImage,
  BadgeHistoryContainer,
  BadgeHistoryBox,
  BadgeHistoryTitle,
  BadgeHistoryHeader,
  BadgeHistoryHeaderTitle,
  BadgeHistoryDescription,
  BadgeHistoryTextContainer,
} from "../style/styleAward";
import { FlatList } from "react-native";

const Award = () => {
  const renderBadge = ({ item }) => (
    <BadgeBox>
      <BadgeImage source={require("../design/ui/award/badges/badge.png")} />
    </BadgeBox>
  );

  // Create an array of 8 items
  const badgeItems = Array.from({ length: 8 }, (_, index) => index);

  // const badgeHistoryData = [
  //   {
  //     id: "1",
  //     title: "AWARD TITLE",
  //     description: "THIS IS A DESCRIPTION OF AWARD TITLE",
  //   },
  //   {
  //     id: "2",
  //     title: "AWARD TITLE",
  //     description: "THIS IS A DESCRIPTION OF AWARD TITLE",
  //   },
  //   // Add more items as needed
  // ];

  const createBadgeHistoryData = (count) => {
    return Array.from({ length: count }, (_, index) => {
      const id = index + 1;
      return {
        id: id.toString(),
        title: "AWARD TITLE",
        description: "THIS IS A DESCRIPTION OF AWARD TITLE",
      };
    });
  };

  const badgeHistoryData = createBadgeHistoryData(5);

  const renderBadgeHistoryItem = ({ item }) => (
    <BadgeHistoryBox>
      <BadgeHistoryTextContainer>
        <BadgeHistoryTitle>{item.title}</BadgeHistoryTitle>
        <BadgeHistoryDescription>{item.description}</BadgeHistoryDescription>
      </BadgeHistoryTextContainer>
    </BadgeHistoryBox>
  );

  return (
    <>
      <Container>
        <MainContainer>
          <Header>
            <HeaderTitle>AWARDS & BADGES</HeaderTitle>
          </Header>
          <BadgeContainer>
            <FlatList
              data={badgeItems}
              renderItem={renderBadge}
              keyExtractor={(item) => item.toString()}
              numColumns={4} // Set the number of columns to 4
              columnWrapperStyle={{ justifyContent: "space-between" }}
              scrollEnabled={false}
            />
          </BadgeContainer>
          <BadgeHistoryContainer>
            <BadgeHistoryHeader>
              <BadgeHistoryHeaderTitle>AWARD HISTORY</BadgeHistoryHeaderTitle>
            </BadgeHistoryHeader>
            <FlatList
              data={badgeHistoryData}
              renderItem={renderBadgeHistoryItem}
              keyExtractor={(item) => item.id}
            />
          </BadgeHistoryContainer>
        </MainContainer>
      </Container>
    </>
  );
};

export default Award;
