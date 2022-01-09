import Modal from "./Modal";
import { useState } from "react";
import "./editTask.css";
import { doc, updateDoc } from "firebase/firestore";

import { db, storage } from "../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

function EditTask({
  open,
  onClose,
  toEditTitle,
  toEditRefe,
  toEditDate,
  toEditMonth,
  id,
}) {
  const [title, setTitle] = useState(toEditTitle);
  const [date, setDate] = useState(toEditDate);
  const [month, setMonth] = useState(toEditMonth);
  const [refe, setRefe] = useState(toEditRefe);

  const [progress, setProgress] = useState(0);

  const formHandler = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    uploadFiles(file);
  };

  const uploadFiles = (file) => {
    //
    if (!file) return;
    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

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

  /* function to update firestore */
  const handleUpdate = async (e) => {
    e.preventDefault();
    const taskDocRef = doc(db, "tasks", id);
    try {
      await updateDoc(taskDocRef, {
        title: title,
        date: date,
        month: month,
        refe: refe,
      });
      onClose();
    } catch (err) {
      alert(err);
    }
  };

  return (
    <Modal modalLable="Editar evento" onClose={onClose} open={open}>
      <form onSubmit={formHandler}>
        <input type="file" className="input" />
        <h3>Uploaded {progress} %</h3>
        <button type="submit">Upload</button>
      </form>

      <form onSubmit={handleUpdate} className="editTask">
        <input
          type="text"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
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
          placeholder="Mês"
          maxLength={3}
        />

        <button type="submit">Edit</button>
      </form>
    </Modal>
  );
}

export default EditTask;
