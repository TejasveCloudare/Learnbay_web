import React from "react";
import HeroSection from "../Components/Home/HeroSection";
import TechnologiesAndDomains from "../Components/Home/TechnologiesAndDomains";
import Cards from "../Components/Home/Cards";
import ChooseLearnbay from "../Components/Home/ChooseLearnbay";
import RealStories from "../Components/Home/RealStories";
import CourseRated from "../Components/Home/CourseRated";
import TestimonialInquiry from "../Components/Home/TestimonialInquiry";
import OthersVsLearnbay from "../Components/Home/OthersVsLearnbay";

function Home() {
  return (
    <div>
      <HeroSection />
      <TechnologiesAndDomains />
      <Cards />
      <ChooseLearnbay />
      <RealStories />
      <CourseRated />
      <TestimonialInquiry />
      <OthersVsLearnbay />
    </div>
  );
}

export default Home;
