import React, { useState } from "react";
import HeroSection from "../components/Hero";

import { ParallaxProvider } from "react-scroll-parallax";
import TimelineSection from "../components/Timeline";
import StartSection from "../components/Start";
import WalkSection from "../components/Walk";

function Home() {
  return (
    <>
      {/* it accepts toggle */}
      <ParallaxProvider>
        <HeroSection />
        <TimelineSection />
        <StartSection />
        <WalkSection />
      </ParallaxProvider>
    </>
  );
}

export default Home;
