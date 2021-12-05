import React, { useState } from "react";
import { Link } from "react-scroll";

import {
  HeroContainer,
  HeroContent,
  HeroH1,
  TitleWrap,
  InfoWrap,
  Text,
  InfoImg,
} from "./HeroElements";

import { WalkInfo } from "../../data/data.js";

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
          {WalkInfo.map((item, index) => {
            return (
              <>
                <TitleWrap>
                  <HeroH1>{item.title}</HeroH1>
                </TitleWrap>
                <InfoWrap>
                  <InfoImg>
                    <img src={item.img} />
                  </InfoImg>
                  <Text>{item.text1}</Text>
                </InfoWrap>
              </>
            );
          })}
        </HeroContent>
      </HeroContainer>
    </Link>
  );
};

export default WalkSection;
