import React, { useState } from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import {
  HeroContainer,
  HeroContent,
  HeroH1,
  TitleWrap,
  HeroH3,
  ScrollWrap,
  ArrowWrap,
  ScrollImage,
  ArrowP,
  ArrowSymbol,
  ImageWrap,
  UCWrap,
  UCContent,
  UCTitle,
  UCText,
  ScrollHorizontal,
} from "./HeroElements";

import { UCInfo } from "../../data/data.js";

import { Parallax } from "react-scroll-parallax";
import ImageHero from "../../images/Hero_image.png";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="hero">
      <HeroContent>
        <TitleWrap>
          <Parallax y={[-70, 60]} tagOuter="figure">
            <HeroH3>O -</HeroH3>
            <HeroH1>Jardim</HeroH1>
            <HeroH1>Botânico</HeroH1>
          </Parallax>
        </TitleWrap>
        <ScrollWrap>
          <ScrollImage>
            <ArrowWrap>
              <ArrowP>Scroll</ArrowP>
              <ArrowSymbol scr />
            </ArrowWrap>
            <ImageWrap src={ImageHero} />
          </ScrollImage>
        </ScrollWrap>

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
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
