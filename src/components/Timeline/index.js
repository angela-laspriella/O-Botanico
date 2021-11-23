import React, { useState } from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import {
  TimelineContainer,
  TimelineContent,
  UCWrap,
  UCContent,
  UCTitle,
  UCText,
  ScrollHorizontal,
} from "./TimelineElements";

import { UCInfo } from "../../data/data.js";

import { Parallax } from "react-scroll-parallax";
import ImageHero from "../../images/Hero_image.png";

const TimelineSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <TimelineContainer id="timeline">
      <TimelineContent>
        <Controller>
          <Scene triggerHook="onLeave" duration={6000} pin>
            {(progress) => (
              <ScrollHorizontal>
                <Timeline totalProgress={progress} paused>
                  <Tween from={{ x: "0%" }} to={{ x: "-50%" }}>
                    <UCWrap>
                      <UCContent>
                        {UCInfo.map((item, index) => {
                          return (
                            <>
                              <UCTitle>{item.title}</UCTitle>
                              <UCText>{item.text01}</UCText>
                              <UCText>{item.text02}</UCText>
                            </>
                          );
                        })}
                      </UCContent>
                    </UCWrap>
                  </Tween>
                </Timeline>
              </ScrollHorizontal>
            )}
          </Scene>
        </Controller>
      </TimelineContent>
    </TimelineContainer>
  );
};

export default TimelineSection;
