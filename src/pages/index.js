import React, { useState } from "react";
import HeroSection from "../components/Hero";

import { ParallaxProvider } from "react-scroll-parallax";

function Home() {
  return (
    <>
      {/* it accepts toggle */}
      <ParallaxProvider>
        <HeroSection />
      </ParallaxProvider>
    </>
  );
}

export default Home;
