import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Login-Register/firebase-config";

import { MainContainer, Button } from "./DasboardElements.js";

const Dashboard = () => {
  const [user, setUser] = useState({});

  const navigate = useNavigate();

  const logout = async () => {
    await signOut(auth);
    navigate("/loginPage");
  };

  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser == null) navigate("/loginPage");
    setUser(currentUser);
  });

  return (
    <MainContainer>
      <div>
        <h4> Usúario: </h4>
        {user?.email}
        <button onClick={logout}> Log Out </button>
      </div>
      <div>
        <Button href="/eventosM"> Eventos </Button>
        <Button href="/artigosM"> Artigos </Button>
      </div>
    </MainContainer>
  );
};

export default Dashboard;
