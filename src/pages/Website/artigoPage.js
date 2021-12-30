import React, { useState } from "react";
import NoticiaSection from "../../components/Noticia";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

import { ParallaxProvider } from "react-scroll-parallax";

function Noticia() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen); //false-true-true-false
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />

      <ParallaxProvider>
        <NoticiaSection />
      </ParallaxProvider>
    </>
  );
}

export default Noticia;
