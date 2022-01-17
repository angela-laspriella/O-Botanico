import "./taskManager.css";
import Task from "./Task";
import { useState, useEffect } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import AddTask from "./AddTask";

import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../Login-Register/firebase-config";

function TaskManager() {
  const [openAddModal, setOpenAddModal] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [user, setUser] = useState({});

  const navigate = useNavigate();

  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser == null) navigate("/loginPage");
    setUser(currentUser);
  });

  const logout = async () => {
    await signOut(auth);
    navigate("/loginPage");
  };

  /* function to get all tasks from firestore in realtime */
  useEffect(() => {
    const taskColRef = query(
      collection(db, "artigos"),
      orderBy("created", "desc")
    );
    onSnapshot(taskColRef, (snapshot) => {
      setTasks(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <div className="taskManager">
      <header>
        <div>
          <p>Artigos Manager</p>
        </div>
        <div>
          <a href="/dashboard">Dashboard</a>
          <a onClick={logout}>Log out</a>
        </div>
      </header>

      <div className="taskManager__container">
        <button onClick={() => setOpenAddModal(true)}>
          Adicionar artigos +
        </button>
        <div className="taskManager__tasks">
          {tasks.map((task) => (
            <Task
              id={task.id}
              key={task.id}
              completed={task.data.completed}
              title={task.data.title}
              date={task.data.date}
              text={task.data.text}
              refe={task.data.refe}
              refe2={task.data.refe2}
              namePath={task.data.namePath}
              namePath2={task.data.namePath2}
            />
          ))}
        </div>
      </div>

      {openAddModal && (
        <AddTask onClose={() => setOpenAddModal(false)} open={openAddModal} />
      )}
    </div>
  );
}

export default TaskManager;
