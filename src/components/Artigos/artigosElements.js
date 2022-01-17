import styled from "styled-components";

export const ArticlesContainer = styled.div`
  display: flex;
  flex-direction: column;

  background: #fdfae3;
  height: fit-content;
  align-items: center;
  justify-content: center;

  padding-bottom: 60px;
  min-height: 100vh;
`;

export const TituloWrap = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-top: 80px;
  margin-left: 50px;
  /* border: red 1px solid; */

  @media screen and (max-width: 1200px) {
    margin-left: 350px;
  }

  @media screen and (max-width: 760px) {
    margin-left: 130px;
  }
`;

export const ArtigosH1 = styled.h1`
  color: #f46036;
  text-align: left;
  font-weight: 800;
  font-size: 90px;
`;

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Container1 = styled.div`
  display: grid;
  width: fit-content;
  height: fit-content;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 40px;
  /* border: red 2px solid; */

  margin-top: 40px;

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 760px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
