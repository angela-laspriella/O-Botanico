import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../Login-Register/firebase-config";

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
    <div className="App">
      <h4> User Logged In: </h4>
      {user?.email}

      <button onClick={logout}> Sign Out </button>
    </div>
  );
};

export default Dashboard;
