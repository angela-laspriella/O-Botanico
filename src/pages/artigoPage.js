import React, { useState } from "react";
import NoticiaSection from "../components/Noticia";

import { ParallaxProvider } from "react-scroll-parallax";

function Noticia() {
  return (
    <>
      {/* it accepts toggle */}
      <ParallaxProvider>
        <NoticiaSection />
      </ParallaxProvider>
    </>
  );
}

export default Noticia;
