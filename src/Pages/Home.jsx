import React from "react";
import HeroSection from "../Components/Home/HeroSection";
import TechnologiesAndDomains from "../Components/Home/TechnologiesAndDomains";
import Cards from "../Components/Home/Cards";
// import ChooseLearnbay from "../Components/Home/ChooseLearnbay";
// import RealStories from "../Components/Home/RealStories";
import CourseRated from "../Components/Home/CourseRated";
import TestimonialInquiry from "../Components/Home/TestimonialInquiry";
import OthersVsLearnbay from "../Components/Home/OthersVsLearnbay";
import MissionVisionSection from "../Components/Home/MissionVisionSection";
import ChooseEdynoor from "../Components/Home/ChooseEdynoor";

function Home() {
  return (
    <div>
      <HeroSection />
      <TechnologiesAndDomains />
      <MissionVisionSection />
      <div id="cardsSection">
        <Cards />
      </div>
      {/* <ChooseLearnbay /> */}
      <ChooseEdynoor />
      {/* <RealStories /> */}
      <CourseRated />
      <TestimonialInquiry />
      <OthersVsLearnbay />
    </div>
  );
}

export default Home;
