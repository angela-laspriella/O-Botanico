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
  const [text, settext] = useState("");
  const [refe, setRefe] = useState("");
  const [refe2, setRefe2] = useState("");

  const [namePath, setnamePath] = useState("");
  const [progress, setProgress] = useState(0);

  const [namePath2, setnamePath2] = useState("");
  const [progress2, setProgress2] = useState(0);

  /* function to add new task to firestore */
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
    const namepath = `imagensArtigos/${file.name}`;
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

  const uploadFiles2 = (file) => {
    //
    if (!file) return;
    const storageRef2 = ref(storage, `imagensArtigos/${file.name}`);
    const uploadTask2 = uploadBytesResumable(storageRef2, file);
    const namepath2 = `imagensArtigos/${file.name}`;
    setnamePath2(namepath2);

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

  const handleSubmit = async (e, file) => {
    /* console.log("File available at:::::", r.efe............); */
    e.preventDefault();
    try {
      await addDoc(collection(db, "artigos"), {
        title: title,
        date: date,
        text: text,
        refe: refe,
        refe2: refe2,
        namePath: namePath,
        namePath2: namePath2,
        completed: false,
        created: Timestamp.now(),
      });
      onClose();
    } catch (err) {
      alert(err);
    }
  };

  return (
    <Modal modalLable="Adicionar Artigo" onClose={onClose} open={open}>
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

      <form onSubmit={handleSubmit} className="addTask" name="addTask">
        {/* <form onSubmit={formHandler}> */}
        <input
          type="text"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder="Introduzir Título"
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
        <button type="submit">Done</button>
      </form>
    </Modal>
  );
}

export default AddTask;
