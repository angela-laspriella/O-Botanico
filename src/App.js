import React, { useState } from "react";
import "./App.scss";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "../src/components/Sidebar";
import Navbar from "../src/components/Navbar";

import Home from "./pages";
import Contacts from "./pages/contacts";
import Eventos from "./pages/eventos";
import Articles from "./pages/artigos";
import Noticia from "./pages/artigoPage";
import Login from "./pages/loginPage";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen); //false-true-true-false
  };

  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactos" element={<Contacts />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/artigos" element={<Articles />} />
        <Route path="/artigoPage" element={<Noticia />} />
        <Route path="/loginPage" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
