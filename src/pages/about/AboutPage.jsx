import React from "react";
import AboutBanner from "./AboutBanner";
import AboutMissionVission from "./AboutMissionVission";
import Team from "./Team";

const AboutPage = () => {
  window.scrollTo(0, 0);
  return (
    <div className="  mx-auto ">
      <AboutBanner></AboutBanner>
      <AboutMissionVission></AboutMissionVission>
      <Team></Team>
    </div>
  );
};

export default AboutPage;
