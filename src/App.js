import React, { useState } from "react";
import "./App.scss";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Website/";
import Contacts from "./pages/Website/contacts";
import Eventos from "./pages/Website/eventos";
import Articles from "./pages/Website/artigos";
import Noticia from "./pages/Website/artigoPage";

import Login from "./pages/Backoffice/loginPage";
import Register from "./pages/Backoffice/registerPage";
import DashboardPage from "./pages/Backoffice/dashboardPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/loginPage" element={<Login />} />
        <Route path="/registerPage" element={<Register />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactos" element={<Contacts />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/artigos" element={<Articles />} />
        <Route path="/artigoPage" element={<Noticia />} />
      </Routes>
    </Router>
  );
}

export default App;
