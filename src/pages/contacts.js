import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import { ParallaxProvider } from "react-scroll-parallax";

function Contacts() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen); //false-true-true-false
  };

  return (
    <>
      <div className="contactos">
        <h1>Reports</h1>
      </div>
    </>
  );
}

export default Contacts;
