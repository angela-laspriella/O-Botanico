import styled from "styled-components";

export const ArticlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #fdfae3;
  height: fit-content;
  align-items: center;
  padding-top: 48px;
  justify-content: center;
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

export const Container1 = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 40px;

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 760px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const ThumbnailContainer = styled.div`
  padding-top: 45px;
  margin-bottom: 50px;
`;

export const ImgArt = styled.div``;

export const Artigo = styled.a`
  display: grid;
  height: 416px;
  width: 360px;
  background: #fdfae3;
  border: #161a15 2px solid;
  justify-content: center;
  text-align: left;
  padding: 14px 14px 14px 14px;
  filter: drop-shadow(0px 2px 9px rgba(0, 0, 0, 0.25));
  text-decoration: none;
  text-decoration-line: none;

  &:hover {
    transition: 0.25s;
    height: 421px;
    width: 365px;
    border: #f46036 2px solid;
    cursor: pointer;
  }
`;

export const Headline = styled.h2`
  color: #161a15;
  font-size: 20px;
  margin-top: -10px;
`;

export const Subtitle = styled.h3`
  color: #161a15;
  font-size: 14px;
  font-family: "Lato";
  margin-top: -15px;
`;

export const Text = styled.p`
  color: #161a15;
  font-size: 13px;
  font-family: "Lato";
`;
