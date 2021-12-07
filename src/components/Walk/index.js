import React, { useState } from "react";

import {
  HeroContainer,
  HeroContent,
  HeroH1,
  TitleWrap,
  InfoWrap,
  TextWrap,
  Text,
  ImgWrap,
  InfoImg,
} from "./HeroElements";

import { WalkInfo } from "../../data/data.js";
import { Parallax } from "react-scroll-parallax";

const WalkSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="walk">
      <HeroContent>
        {WalkInfo.map((item) => {
          return (
            <>
              <TitleWrap>
                <HeroH1>{item.title}</HeroH1>
              </TitleWrap>
              <InfoWrap>
                <ImgWrap>
                  <InfoImg>
                    <img src={item.img} />
                  </InfoImg>
                </ImgWrap>
                <TextWrap>
                  {" "}
                  <Text>{item.text1}</Text>
                </TextWrap>
              </InfoWrap>
            </>
          );
        })}
      </HeroContent>
    </HeroContainer>
  );
};

export default WalkSection;
