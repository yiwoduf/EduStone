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
const data = {
    content: {
        userBadges: [
            {
                _uid: "testUID0",
                component: "badge0",
                source: require("../../design/ui/award/badges/badge_BLUE.png")
            },
            {
                _uid: "testUID1",
                component: "badge1",
                source: require("../../design/ui/award/badges/badge_GREEN.png")
            },
            {
                _uid: "testUID2",
                component: "badge2",
                source: require("../../design/ui/award/badges/badge_LPURPLE.png")
            },
            {
                _uid: "testUID3",
                component: "badge3",
                source: require("../../design/ui/award/badges/badge_PURPLE.png")
            },
            {
                _uid: "testUID4",
                component: "badge4",
                source: require("../../design/ui/award/badges/badge_RED.png")
            },
            {
                _uid: "testUID5",
                component: "badge5",
                source: require("../../design/ui/award/badges/badge_TEAL.png")
            },
            {
                _uid: "testUID6",
                component: "badge6",
                source: require("../../design/ui/award/badges/badge_WHITE.png")
            },
            {
                _uid: "testUID7",
                component: "badge7",
                source: require("../../design/ui/award/badges/badge_YELLOW.png")
            }
        ],
        userAwards: [
            {
                component: "award0",
                source: require("../../design/ui/award/achievements/achievement_circle.png")
            },
            {
                component: "award1",
                source: require("../../design/ui/award/achievements/achievement_circle.png")
            },
            {
                component: "award2",
                source: require("../../design/ui/award/achievements/achievement_circle.png")
            },
            {
                component: "award3",
                source: require("../../design/ui/award/achievements/achievement_circle.png")
            },
            {
                component: "award4",
                source: require("../../design/ui/award/achievements/achievement_circle.png")
            },
            {
                component: "award5",
                source: require("../../design/ui/award/achievements/achievement_circle.png")
            },
            {
                component: "award6",
                source: require("../../design/ui/award/achievements/achievement_circle.png")
            },
            {
                component: "award7",
                source: require("../../design/ui/award/achievements/achievement_circle.png")
            },
        ]
    }
};

export function Badges() {
    return(
        <BadgeContainer>
            {data.content.userBadges.map((badge) => (
                <BadgeImage source={badge.source}/>
            ))}
        </BadgeContainer>
    );
}

export function Awards() {
    return(
        <ScrollView>
            {data.content.userAwards.map((award) => (
                <AwardComponentContainer>
                    <AwardImage
                        source={award.source}
                    />
                    <AwardTitleContainer>
                        <AwardTitle>{award.component}</AwardTitle>
                    </AwardTitleContainer>
              </AwardComponentContainer>
            ))}
        </ScrollView>
    );
}