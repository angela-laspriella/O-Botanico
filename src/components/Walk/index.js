import React, { useState } from "react";

import {
  HeroContainer,
  HeroContent,
  HeroH1,
  TitleWrap,
  HeroH3,
} from "./HeroElements";

import { Parallax } from "react-scroll-parallax";
import ImageHero from "../../images/Hero_image.png";

const WalkSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="hero">
      <HeroContent>
        <TitleWrap>
          <HeroH1>Recanto</HeroH1>
          <HeroH1>Tropical</HeroH1>
        </TitleWrap>
      </HeroContent>
    </HeroContainer>
  );
};

export default WalkSection;
