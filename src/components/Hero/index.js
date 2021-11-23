import React, { useState } from "react";

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
} from "./HeroElements";

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
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
