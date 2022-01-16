import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import {
  Content,
  NoticiaContainer,
  ReturnIcon,
  ImgWrapper,
  TextoWrapper,
  Cabecalho,
  Subtitulo,
  Corpo,
} from "./noticiaElements";
import { noticias } from "../../data/data";

import "../Dashboard/Artigos/taskManager.css";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../Dashboard/firebase";

const NoticiaSection = () => {
  const { id } = useParams();
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
      <Content>
        <ReturnIcon to="/artigos">
          <FaArrowLeft />
        </ReturnIcon>
        {noticias
          .filter((item) => item.id === id)
          .map((item, index) => {
            return (
              <>
                <NoticiaContainer>
                  <ImgWrapper>
                    <img src={item.imgB} />
                  </ImgWrapper>
                  <TextoWrapper>
                    <Cabecalho>{item.title}</Cabecalho>
                    <Subtitulo>{item.subtitle}</Subtitulo>
                    <Corpo>
                      {item.corpo}
                      {item.corpo2}
                    </Corpo>
                  </TextoWrapper>
                </NoticiaContainer>
              </>
            );
          })}
      </Content>
    </>
  );
};

export default NoticiaSection;
