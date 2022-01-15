import React from "react";
import ArtigoSection from "../components/Artigos";

import { ParallaxProvider } from "react-scroll-parallax";

function Articles() {
  return (
    <>
      {/* it accepts toggle */}
      <ParallaxProvider>
        <ArtigoSection />
      </ParallaxProvider>
    </>
  );
}

export default Articles;
