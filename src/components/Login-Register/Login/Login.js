import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase-config";

import "../login-register.css";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const [user, setUser] = useState({});

  const navigate = useNavigate();

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    if (currentUser) navigate("/dashboard");
  });

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
      // alert(error.message);
      setErrorMessage("Example error message!");
    }
  };

  return (
    <div className="App">
      <div className="Box">
        <h3> Login </h3>
        {errorMessage && <p className="error"> {errorMessage} </p>}

        <input
          placeholder="Email..."
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password..."
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />

        <button onClick={login}> Login</button>
        <a href="/registerPage">Register here</a>
      </div>
    </div>
  );
};

export default Login;
