import React from "react";

import { StartContainer, StartH1, TitleWrap, ArrowDown } from "./NextElements";

const NextSection = () => {
  return (
    <>
      <StartContainer id="next">
        <TitleWrap>
          <StartH1>Ver próximos eventos</StartH1>
          <ArrowDown />
        </TitleWrap>
      </StartContainer>
    </>
  );
};

export default NextSection;
