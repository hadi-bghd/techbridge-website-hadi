import React from "react";
import { Element } from "react-scroll";
import Home from "./Home";
// import Story from "./AboutUs";
import MissionSection from "./Mission";
// import VisionSection from "./Vision";
import Solutions from "./Solutions";
import Footer from "./Footer";
import StickyConsultationButton from "./StickyConsultationButton";

const BigTradePage = () => (
  <>
    <Element name="home"><Home /></Element>
    {/* <Element name="story"><Story /></Element> MERGED IN MISSION */}
    <Element name="mission"><MissionSection /></Element>
    {/* <Element name="vision"><VisionSection /></Element> MERGED IN MISSION */}
    <Element name="solutions"><Solutions /></Element>
    <Element name="stickyconsultationbutton"><StickyConsultationButton /></Element>
    <Element name="footer"><Footer /></Element>
  </>
);

export default BigTradePage;
