import "./task.css";
import { useState } from "react";
import TaskItem from "./TaskItem";
import EditTask from "./EditTask";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";

import { getStorage, ref, deleteObject } from "firebase/storage";

const storage = getStorage();

function Task({
  id,
  title,
  date,
  refe,
  refe2,
  namePath,
  namePath2,
  text,
  completed,
}) {
  const [checked, setChecked] = useState(completed);
  const [open, setOpen] = useState({ edit: false, view: false });

  const handleClose = () => {
    setOpen({ edit: false, view: false });
  };

  /* function to update firestore */
  const handleChange = async () => {
    const taskDocRef = doc(db, "artigos", id);
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
    const taskDocRef = doc(db, "artigos", id);
    try {
      await deleteDoc(taskDocRef);
      const desertRef = ref(storage, `${namePath}`);
      console.log(namePath);
      console.log(namePath2);
      // Delete the file
      deleteObject(desertRef)
        .then(() => {
          // File deleted successfully
        })
        .catch((error) => {
          // Uh-oh, an error occurred!
        });

      const desertRef2 = ref(storage, `${namePath2}`);

      // Delete the file
      deleteObject(desertRef2)
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

  /* const handleDelete2 = async () => {
    const taskDocRef = doc(db, "artigos", id);
    try {
      await deleteDoc(taskDocRef);
      const desertRef2 = ref(storage, `${name.............Path2}`);

      // Delete the file
      deleteObject(desertRef2)
        .then(() => {
          // File deleted successfully
        })
        .catch((error) => {
          // Uh-oh, an error occurred!
        });
    } catch (err) {
      alert(err);
    }
  }; */

  return (
    <div className={`task ${checked && "task--borderColor"}`}>
      <div className="task__body">
        <img src={refe} />
        <h2>{title}</h2>
        <p>{date}</p>
        <p>{text}</p>
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
          text={text}
          refe={refe}
          refe2={refe2}
          open={open.view}
        />
      )}

      {open.edit && (
        <EditTask
          onClose={handleClose}
          toEditTitle={title}
          toEditDate={date}
          toEdittext={text}
          toEditRefe={refe}
          toEditRefe2={refe2}
          open={open.edit}
          id={id}
        />
      )}
    </div>
  );
}

export default Task;
