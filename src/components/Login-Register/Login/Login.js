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
import { auth } from "../firebase-config";

const Login = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
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

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="App">
      <div>
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
      </div>

      <h4> User Logged In: </h4>
      {user?.email}

      <button onClick={logout}> Sign Out </button>
    </div>
  );
};

export default Login;
