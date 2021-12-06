import React, { useState } from "react";
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

import { UCInfo } from "../../data/data.js";
import { EventoInfo } from "../../data/data.js";

const TimelineSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen); //false-true-true-false
  };

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
