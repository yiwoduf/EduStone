import React from "react";
import { MainContainer, BackgroundContainer } from "../style/styleCalendar";

const Calendar = () => {
  return (
    <>
      <BackgroundContainer
        source={require("../design/ui/UI_Calendar_iOS.png")}
      />
      <MainContainer></MainContainer>
    </>
  );
};

export default Calendar;
