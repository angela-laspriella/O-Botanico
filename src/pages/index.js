import React, { useState } from "react";
import HeroSection from "../components/Hero";

import { ParallaxProvider } from "react-scroll-parallax";
import TimelineSection from "../components/Timeline";

function Home() {
  return (
    <>
      {/* it accepts toggle */}
      <ParallaxProvider>
        <HeroSection />
        <TimelineSection />
      </ParallaxProvider>
    </>
  );
}

export default Home;
