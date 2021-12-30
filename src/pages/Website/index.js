import React, { useState } from "react";

import HeroSection from "../../components/Hero";
import TimelineSection from "../../components/Timeline";
import StartSection from "../../components/Start";
import WalkSection from "../../components/Walk";
import NextSection from "../../components/Next";

import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

import { ParallaxProvider } from "react-scroll-parallax";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen); //false-true-true-false
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />

      <ParallaxProvider>
        <HeroSection />
        <TimelineSection />
        <StartSection />
        <WalkSection />
        <NextSection />
      </ParallaxProvider>
    </>
  );
}

export default Home;
