import React from "react";
import {
  ArticlesContainer,
  TituloWrap,
  ArtigosH1,
  Grid,
  Container1,
} from "./artigosElements";
import Card from "../Card";

const ArtigoSection = () => {
  return (
    <>
      <ArticlesContainer id="artigos">
        <TituloWrap>
          <ArtigosH1> Artigos </ArtigosH1>
        </TituloWrap>
        <Grid>
          <Container1>
            <Card />
          </Container1>
        </Grid>
      </ArticlesContainer>
    </>
  );
};

export default ArtigoSection;
