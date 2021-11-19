import React, { useState } from "react";
import {
  HeroContainer,
  HeroContent,
  StartWrap,
  ScrollM,
  HeroH1,
  TitleWrap,
  HeroH3,
} from "./HeroElements";

import { Parallax } from "react-scroll-parallax";
import ring from "./Artboard 1.png";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="hero">
      <HeroContent>
        <StartWrap>
          <Parallax y={[-155, 150]}>
            <img src={ring} />
          </Parallax>
          <img src={ring} />
        </StartWrap>
        <ScrollM>Scroll</ScrollM>
        <TitleWrap>
          <Parallax x={[0, 100]} tagOuter="figure">
            <HeroH3>O -</HeroH3>
            <HeroH1>Eduarda</HeroH1>
            <HeroH1>Botânico</HeroH1>
          </Parallax>
        </TitleWrap>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
