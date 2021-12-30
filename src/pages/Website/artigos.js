import React, { useState } from "react";
import ArtigoSection from "../../components/Artigos";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

import { ParallaxProvider } from "react-scroll-parallax";

function Articles() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen); //false-true-true-false
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />

      <ParallaxProvider>
        <ArtigoSection />
      </ParallaxProvider>
    </>
  );
}

export default Articles;
