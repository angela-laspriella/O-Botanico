import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import "./login.css";
import { auth } from "./firebase-config";

const Dashboard = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const [user, setUser] = useState({});

  const navigate = useNavigate();

  const logout = async () => {
    await signOut(auth);
    navigate("/loginPage");
  };

  return (
    <div className="App">
      <h4> dashboard: </h4>

      <button onClick={logout}> Sign Out </button>
    </div>
  );
};

export default Dashboard;
