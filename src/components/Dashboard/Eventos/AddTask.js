import Modal from "./Modal";
import { useState } from "react";
import "./addTask.css";
import { db } from "../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "../firebase";

function AddTask({ onClose, open }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [month, setMonth] = useState("");
  const [refe, setRefe] = useState("");

  const [namePath, setnamePath] = useState("");
  const [progress, setProgress] = useState(0);

  /* function to add new task to firestore */
  const formHandler = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    uploadFiles(file);
  };

  const uploadFiles = (file) => {
    //
    if (!file) return;
    const storageRef = ref(storage, `imagensEventos/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    const namepath = `imagensEventos/${file.name}`;
    setnamePath(namepath);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (error) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setRefe(`${downloadURL}`);
        });
      }
    );
  };

  const handleSubmit = async (e, file) => {
    console.log("File available at:::::", refe);
    e.preventDefault();
    try {
      await addDoc(collection(db, "tasks"), {
        title: title,
        date: date,
        month: month,
        refe: refe,
        namePath: namePath,
        completed: false,
        created: Timestamp.now(),
      });
      onClose();
    } catch (err) {
      alert(err);
    }
  };

  return (
    <Modal modalLable="Add Task" onClose={onClose} open={open}>
      <form onSubmit={formHandler}>
        <input type="file" className="input" />
        <h3>Uploaded {progress} %</h3>
        <button type="submit">Upload</button>
      </form>

      <form onSubmit={handleSubmit} className="addTask" name="addTask">
        {/* <form onSubmit={formHandler}> */}
        <input
          type="text"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder="Introduzir T??tulo"
        />

        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        ></input>

        <input
          type="text"
          name="Month"
          onChange={(e) => setMonth(e.target.value)}
          value={month}
          placeholder="M??s"
          maxLength={3}
        />
        <button type="submit">Done</button>
      </form>
    </Modal>
  );
}

export default AddTask;
