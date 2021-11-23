import React, { useState } from "react";
import { Link } from "react-scroll";

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
    <Link
      activeClass="active"
      to="walk"
      spy={true}
      smooth={true}
      offset={-100}
      duration={500}
    >
      <HeroContainer id="walk">
        <HeroContent>
          <TitleWrap>
            <HeroH1>Recanto</HeroH1>
            <HeroH1>Tropical</HeroH1>
          </TitleWrap>
        </HeroContent>
      </HeroContainer>
    </Link>
  );
};

export default WalkSection;
