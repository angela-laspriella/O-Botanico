import React from "react";
import { useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import {
  Content,
  NoticiaContainer,
  ReturnIcon,
  ImgWrapper,
  TextoWrapper,
  Cabecalho,
  Subtitulo,
  Corpo,
} from "./noticiaElements";
import { noticias } from "../../data/data";

const NoticiaSection = () => {
  const { id } = useParams();

  return (
    <>
      <Content>
        <ReturnIcon to="/artigos">
          <FaArrowLeft />
        </ReturnIcon>
        {noticias
          .filter((item) => item.id === id)
          .map((item, index) => {
            return (
              <>
                <NoticiaContainer>
                  <ImgWrapper>
                    <img src={item.imgB} />
                  </ImgWrapper>
                  <TextoWrapper>
                    <Cabecalho>{item.title}</Cabecalho>
                    <Subtitulo>{item.subtitle}</Subtitulo>
                    <Corpo>
                      {item.corpo}
                      {item.corpo2}
                    </Corpo>
                  </TextoWrapper>
                </NoticiaContainer>
              </>
            );
          })}
      </Content>
    </>
  );
};

export default NoticiaSection;
