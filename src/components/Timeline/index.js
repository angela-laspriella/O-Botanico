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
  TimelineWrap,
  ImageWrap,
  TextWrap,
  Horizontal,
  Text,
  Subtext,
  InfoWrap,
  LineWrap,
  Line,
} from "./TimelineElements";

import { UCInfo } from "../../data/data.js";
import { TimelineInfo } from "../../data/data.js";

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
                  <Tween from={{ x: "0%" }} to={{ x: "-70%" }}>
                    <Horizontal>
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

                      <TimelineWrap>
                        <InfoWrap>
                          {TimelineInfo.map((item, index) => {
                            return (
                              <>
                                <ImageWrap>
                                  <img src={item.img} />
                                </ImageWrap>
                                <TextWrap>
                                  <Text> {item.text1}</Text>
                                  <Subtext>{item.subtext} </Subtext>
                                </TextWrap>
                              </>
                            );
                          })}
                        </InfoWrap>
                        {/* <Line /> */}
                      </TimelineWrap>
                    </Horizontal>
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
