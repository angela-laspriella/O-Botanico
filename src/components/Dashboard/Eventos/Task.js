import "./task.css";
import { useState } from "react";
import TaskItem from "./TaskItem";
import EditTask from "./EditTask";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";

import { getStorage, ref, deleteObject } from "firebase/storage";

const storage = getStorage();

function Task({ id, title, date, refe, namePath, month, completed }) {
  const [checked, setChecked] = useState(completed);
  const [open, setOpen] = useState({ edit: false, view: false });

  const handleClose = () => {
    setOpen({ edit: false, view: false });
  };

  /* function to update firestore */
  const handleChange = async () => {
    const taskDocRef = doc(db, "tasks", id);
    try {
      await updateDoc(taskDocRef, {
        completed: checked,
      });
    } catch (err) {
      alert(err);
    }
  };

  /* function to delete a document from firstore */
  const handleDelete = async () => {
    const taskDocRef = doc(db, "tasks", id);
    try {
      await deleteDoc(taskDocRef);
      const desertRef = ref(storage, `${namePath}`);

      // Delete the file
      deleteObject(desertRef)
        .then(() => {
          // File deleted successfully
        })
        .catch((error) => {
          // Uh-oh, an error occurred!
        });
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div className={`task ${checked && "task--borderColor"}`}>
      <div className="task__body">
        <img src={refe} />
        <h2>{title}</h2>
        <p>{date}</p>
        <p>{month}</p>
        <div className="task__buttons">
          <button onClick={() => setOpen({ ...open, view: true })}>View</button>

          <button
            className="task__editButton"
            onClick={() => setOpen({ ...open, edit: true })}
          >
            Edit
          </button>
          <button className="task__deleteButton" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>

      {open.view && (
        <TaskItem
          onClose={handleClose}
          title={title}
          date={date}
          month={month}
          refe={refe}
          open={open.view}
        />
      )}

      {open.edit && (
        <EditTask
          onClose={handleClose}
          toEditTitle={title}
          toEditDate={date}
          toEditMonth={month}
          toEditRefe={refe}
          open={open.edit}
          id={id}
        />
      )}
    </div>
  );
}

export default Task;
