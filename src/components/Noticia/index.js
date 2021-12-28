import React from "react";
import {
  NoticiaContainer,
  ImgWrapper,
  TextoWrapper,
  Cabecalho,
  Subtitulo,
  Corpo,
} from "./noticiaElements";
import { noticiaOne } from "./data";

const NoticiaSection = () => {
  return (
    <>
      <NoticiaContainer id="artigoPage">
        {noticiaOne.map((item, index) => {
          return (
            <>
              <ImgWrapper>
                <img src={item.imagem} />
              </ImgWrapper>
              <TextoWrapper>
                <Cabecalho>{item.cabecalho}</Cabecalho>
                <Subtitulo>{item.subtitulo}</Subtitulo>
                <Corpo>
                  {item.corpo}
                  {item.corpo2}
                </Corpo>
              </TextoWrapper>
            </>
          );
        })}
      </NoticiaContainer>
    </>
  );
};

export default NoticiaSection;
