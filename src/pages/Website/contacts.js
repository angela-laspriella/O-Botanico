import React, { useState } from "react";
import ContactSection from "../../components/Contacts";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

import { ParallaxProvider } from "react-scroll-parallax";

function Contacts() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen); //false-true-true-false
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />

      <ParallaxProvider>
        <ContactSection></ContactSection>
      </ParallaxProvider>
    </>
  );
}

export default Contacts;
