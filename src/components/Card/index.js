import React from "react";
import { Artigo, ImgArt, Headline, Subtitle, Text } from "./cardElements";
import { noticias } from "../../data/data";

const Card = () => {
  return (
    <>
      {noticias.map((item, index) => {
        return (
          <>
            <Artigo key={index} href={`/noticias/${item.id}`}>
              <ImgArt>
                <img src={item.imgS} />
              </ImgArt>
              <Headline>{item.title}</Headline>
              <Subtitle>{item.subtitle}</Subtitle>
              <Text>{item.introducao}</Text>
            </Artigo>
          </>
        );
      })}
    </>
  );
};

export default Card;
