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
  toEditRefe2,
  toEditDate,
  toEdittext,
  toEdittext2,
  id,
}) {
  const [title, setTitle] = useState(toEditTitle);
  const [date, setDate] = useState(toEditDate);
  const [text, settext] = useState(toEdittext);
  const [text2, settext2] = useState(toEdittext2);
  const [refe, setRefe] = useState(toEditRefe);
  const [refe2, setRefe2] = useState(toEditRefe2);

  const [progress, setProgress] = useState(0);
  const [progress2, setProgress2] = useState(0);

  const formHandler = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    uploadFiles(file);
  };
  const formHandler2 = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    uploadFiles2(file);
  };

  const uploadFiles = (file) => {
    //
    if (!file) return;
    const storageRef = ref(storage, `imagensArtigos/${file.name}`);
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

  const uploadFiles2 = (file) => {
    //
    if (!file) return;
    const storageRef2 = ref(storage, `imagensArtigos/${file.name}`);
    const uploadTask2 = uploadBytesResumable(storageRef2, file);

    uploadTask2.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress2(prog);
      },
      (error) => console.log(error),
      () => {
        getDownloadURL(uploadTask2.snapshot.ref).then((downloadURL) => {
          setRefe2(`${downloadURL}`);
        });
      }
    );
  };

  /* function to update firestore */
  const handleUpdate = async (e) => {
    e.preventDefault();
    const taskDocRef = doc(db, "artigos", id);
    try {
      await updateDoc(taskDocRef, {
        title: title,
        date: date,
        text: text,
        text2: text2,
        refe: refe,
        refe2: refe2,
      });
      onClose();
    } catch (err) {
      alert(err);
    }
  };

  return (
    <Modal modalLable="Editar evento" onClose={onClose} open={open}>
      <h4>Imagem Artigo</h4>
      <form onSubmit={formHandler}>
        <input type="file" className="input" />
        <p>Uploaded {progress} %</p>
        <button type="submit">Upload</button>
      </form>
      <h4>Imagem Noticia</h4>
      <form onSubmit={formHandler2}>
        <input type="file" className="input" />
        <p>Uploaded {progress2} %</p>
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
          name="text"
          onChange={(e) => settext(e.target.value)}
          value={text}
          placeholder="Descrição"
        />

        <input
          type="text"
          name="text2"
          onChange={(e) => settext2(e.target.value)}
          value={text2}
          placeholder="Texto Notícia"
        />

        <button type="submit">Edit</button>
      </form>
    </Modal>
  );
}

export default EditTask;
