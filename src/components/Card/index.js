import React, { useState, useEffect } from "react";
import { Artigo, ImgArt, Headline, Subtitle, Text } from "./cardElements";
import { noticias } from "../../data/data";

import "../Dashboard/Artigos/taskManager.css";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../Dashboard/firebase";

const Card = () => {
  const [tasks, setTasks] = useState([]);

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
    <>
      {tasks.map((task, index) => {
        return (
          <>
            <Artigo key={index} href={`/noticias/${task.id}`}>
              <ImgArt>
                <img src={task.data.refe} />
              </ImgArt>

              <Headline>{task.data.title}</Headline>
              <Subtitle>{task.data.date}</Subtitle>
              <Text>{task.data.text}</Text>
            </Artigo>
          </>
        );
      })}
    </>
  );
};

export default Card;
