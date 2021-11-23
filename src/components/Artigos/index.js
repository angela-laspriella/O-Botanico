import React from "react";
import { ReactComponent as ImgArt } from "../../images/leslie.svg";
import {
  ArticlesContainer,
  TituloWrap,
  ArtigosH1,
  ThumbnailContainer,
  Artigo,
  Headline,
  Subtitle,
  Text,
} from "./artigosElements";

const ArtigoSection = () => {
  return (
    <>
      <ArticlesContainer>
        <TituloWrap>
          <ArtigosH1> Artigos </ArtigosH1>
        </TituloWrap>
        <ThumbnailContainer>
          <Artigo>
            <ImgArt />
            <Headline>Leslie causa destruição</Headline>
            <Subtitle>13 de outubro de 2018</Subtitle>
            <Text>
              Um dos locais mais afetados pela tempestade Leslie foi o jardim
              botânico da Universidade de Coimbra, onde se perderam algumas
              árvores históricas. Vários voluntários e técnicos estão a fazer as
              limpezas necessárias, mas antes do final de outubro o jardim não
              deverá abrir portas. António Gouveia, diretor do jardim botânico,
              revelou que o espaço foi “bastante afetado” e que, para além das
              árvores, também muros e vedações ficaram danificados.
            </Text>
          </Artigo>
        </ThumbnailContainer>
      </ArticlesContainer>
    </>
  );
};

export default ArtigoSection;
