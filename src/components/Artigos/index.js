import React from "react";
import {
  ArticlesContainer,
  TituloWrap,
  ArtigosH1,
  Container1,
  ThumbnailContainer,
  Artigo,
  ImgArt,
  Headline,
  Subtitle,
  Text,
} from "./artigosElements";
import { articleObjOne } from "./data";

const ArtigoSection = () => {
  return (
    <>
      <ArticlesContainer>
        <TituloWrap>
          <ArtigosH1> Artigos </ArtigosH1>
        </TituloWrap>
        <Container1>
          {articleObjOne.map((item, index) => {
            return (
              <>
                <ThumbnailContainer>
                  <Artigo href="/artigoPage">
                    <ImgArt>
                      <img src={item.img} />
                    </ImgArt>
                    <Headline>{item.topTitle}</Headline>
                    <Subtitle>{item.date}</Subtitle>
                    <Text>{item.texto}</Text>
                  </Artigo>
                </ThumbnailContainer>
              </>
            );
          })}
        </Container1>
      </ArticlesContainer>
    </>
  );
};

export default ArtigoSection;
