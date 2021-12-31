import React, { useState } from "react";
import TimelineSection from "../../components/Eventos";
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
        <TimelineSection />
      </ParallaxProvider>
    </>
  );
}

export default Home;
