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
  UCWrap,
  UCContent,
  UCTitle,
  UCText,
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
        <UCWrap>
          <UCContent>
            <Parallax x={[-70, 80]} tagOuter="figure">
              <UCTitle>- Da Faculdade de Coimbra</UCTitle>
              <UCText>
                O Jardim Botânico da Universidade de Coimbra (JBUC), fundado em
                1772, é uma Unidade de Extensão Cultural e de Apoio à Formação
                desta instituição de ensino superior e tem como missões a
                investigação, a conservação da biodiversidade, a educação e
                divulgação de ciência, com especial enfoque na sensibilização
                para o conhecimento e importância da diversidade vegetal, das
                alterações climáticas e da utilização sustentável de recursos.
              </UCText>
              <UCText>
                As coleções de plantas que preenchem cada espaço transportam-nos
                para diferentes latitudes e regiões do mundo, transformando o
                Jardim num verdadeiro museu vivo.
              </UCText>
            </Parallax>
          </UCContent>
        </UCWrap>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
