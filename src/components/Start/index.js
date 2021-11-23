import React, { useState } from "react";

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
      <StartContainer id="start">
        <TitleWrap>
          <StartH1>Começar a explorar</StartH1>
          <ArrowDown />
        </TitleWrap>
      </StartContainer>
    </>
  );
};

export default StartSection;
