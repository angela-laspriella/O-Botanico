import React, { useState } from "react";

import { ParallaxProvider } from "react-scroll-parallax";
import TimelineSection from "../components/Eventos";

function Home() {
  return (
    <>
      <ParallaxProvider>
        <TimelineSection />
      </ParallaxProvider>
    </>
  );
}

export default Home;
