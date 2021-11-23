import React, { useState } from "react";
import { Link } from "react-scroll";

import {
  StartContainer,
  PinkContainer,
  StartH1,
  TitleWrap,
  ArrowDown,
} from "./StartElements";

import { Parallax } from "react-scroll-parallax";

const StartSection = () => {
  return (
    <>
      <Link
        activeClass="active"
        to="start"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
      >
        <StartContainer id="start">
          <TitleWrap>
            <StartH1>Começar a explorar</StartH1>
            <ArrowDown />
          </TitleWrap>
        </StartContainer>
      </Link>
    </>
  );
};

export default StartSection;
