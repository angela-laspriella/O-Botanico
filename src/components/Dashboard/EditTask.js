import Modal from "./Modal";
import { useState } from "react";
import "./editTask.css";
import { doc, updateDoc } from "firebase/firestore";

import { db } from "./firebase";

function EditTask({ open, onClose, toEditTitle, toEditDate, toEditMonth, id }) {
  const [title, setTitle] = useState(toEditTitle);
  const [date, setDate] = useState(toEditDate);
  const [month, setMonth] = useState(toEditMonth);

  /* function to update firestore */
  const handleUpdate = async (e) => {
    e.preventDefault();
    const taskDocRef = doc(db, "tasks", id);
    try {
      await updateDoc(taskDocRef, {
        title: title,
        date: date,
        month: month,
      });
      onClose();
    } catch (err) {
      alert(err);
    }
  };

  return (
    <Modal modalLable="Edit Task" onClose={onClose} open={open}>
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
