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
        {WalkInfo.map((item, index) => {
          return (
            <>
              <TitleWrap>
                <Parallax x={[-50, 50]} tagOuter="figure">
                  <HeroH1>{item.title}</HeroH1>
                </Parallax>
              </TitleWrap>
              <InfoWrap>
                <ImgWrap>
                  <InfoImg>
                    {/* <Parallax x={[-20, 10]} tagOuter="figure"> */}
                    <img src={item.img} />
                    {/* </Parallax> */}
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
