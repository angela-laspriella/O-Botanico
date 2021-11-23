import React, { useState } from "react";
import ContactSection from "../components/Contacts";
import { ParallaxProvider } from "react-scroll-parallax";

function Contacts() {
  return (
    <>
      <ParallaxProvider>
        <ContactSection></ContactSection>
      </ParallaxProvider>
    </>
  );
}

export default Contacts;
