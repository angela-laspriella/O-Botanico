import React, { useState, useEffect } from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";

import "./algumacoisa.css";
import {
  TimelineContainer,
  TimelineContent,
  TimelineContent2,
  ScrollHorizontal,
  TimelineWrap,
  ImageWrap,
  Horizontal,
  Title,
  InfoWrap,
  MonthText,
  Image,
  Date,
  PageTitle,
} from "./EventosElements";

import { EventoInfo } from "../../data/data.js";

import "../Dashboard/taskManager.css";
import Task from "../Dashboard/Task";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../Dashboard/firebase";
import AddTask from "../Dashboard/AddTask";

import eventos3 from "../../images/bamboo.png";

const TimelineSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen); //false-true-true-false
  };

  const [openAddModal, setOpenAddModal] = useState(false);
  const [tasks, setTasks] = useState([]);

  /* function to get all tasks from firestore in realtime */
  useEffect(() => {
    const taskColRef = query(
      collection(db, "tasks"),
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
    <TimelineContainer id="timeline">
      <PageTitle>Eventos</PageTitle>
      <TimelineContent>
        <Controller>
          <Scene triggerHook="onLeave" duration={5000} pin>
            {(progress) => (
              <ScrollHorizontal>
                <Timeline totalProgress={progress} paused>
                  <Tween from={{ x: "0%" }} to={{ x: "-50%" }}>
                    <Horizontal>
                      <TimelineWrap>
                        <InfoWrap>
                          {tasks.map((task) => {
                            return (
                              <>
                                <ImageWrap>
                                  <Image>
                                    <img src={eventos3} />
                                    <Title>{task.data.title}</Title>
                                    <Date>"22-2-2-11"</Date>
                                  </Image>
                                  <MonthText>"ocjff"</MonthText>
                                </ImageWrap>
                              </>
                            );
                          })}
                        </InfoWrap>
                      </TimelineWrap>
                    </Horizontal>
                  </Tween>
                </Timeline>
              </ScrollHorizontal>
            )}
          </Scene>
        </Controller>
      </TimelineContent>
      <TimelineContent2>
        <Controller>
          <TimelineWrap>
            <InfoWrap>
              {EventoInfo.map((item, index) => {
                return (
                  <>
                    <ImageWrap>
                      <Image>
                        <img src={item.img} />
                        <Title>{item.title}</Title>
                        <Date>{item.date}</Date>
                      </Image>
                      <MonthText>{item.mes}</MonthText>
                    </ImageWrap>
                  </>
                );
              })}
            </InfoWrap>
          </TimelineWrap>
        </Controller>
      </TimelineContent2>
    </TimelineContainer>
  );
};

export default TimelineSection;
