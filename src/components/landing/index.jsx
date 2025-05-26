import React from "react";
import HamberMenu from "./hamberMenu";
import HeroSection from "./heroSection";
import FirstPartOfLanding from "./firstPartOfLanding";
import TopCourses from "./topCourses";
import GoodTeacher from "./goodTeacher";
import TopNews from "./topNews";
import ChatPos from "./chatPos";
import CustomSpeedDial from "./customSpeedDial";

const Landing = () => {
  return (
    <div>
      <HamberMenu />
      <HeroSection />
      <FirstPartOfLanding />
      <TopCourses />
      <GoodTeacher />
      <TopNews />
      <ChatPos />
    </div>
  );
};

export default Landing;
