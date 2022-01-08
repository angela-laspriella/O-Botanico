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

import { setDoc, doc } from "firebase/firestore";
import { db } from "./firebase";
import {
  ref,
  uploadString,
  getDownloadURL,
  getStorage,
  uploadBytesResumable,
} from "firebase/storage";

const Dashboard = () => {
  const [img, setImg] = useState(null);
  const [progress, setProgress] = useState(0);
  const storage = getStorage();
  const storageRef = ref(storage, `images/sk`);

  const metadata = {
    contentType: "image/jpeg",
  };

  const formHandler = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    setImg(file);
  };

  const uploadFiles = () => {
    const uploadTask = uploadBytesResumable(storageRef, img, metadata);
    uploadTask.on(
      "state_changed",
      null,
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((URL) => {
          setDoc(doc(db, "posts", "1"), { postImage: URL }, { merge: true });
        });
      }
    );
  };

  return (
    <div>
      <form type="form">
        <div>
          <input type="file" accept=".jpg,.png,.jpeg" onChange={formHandler} />
          <button type="button" onClick={uploadFiles}>
            Upload
          </button>
          <h4>{progress}%</h4>
        </div>
      </form>
    </div>
  );
};

export default Dashboard;
