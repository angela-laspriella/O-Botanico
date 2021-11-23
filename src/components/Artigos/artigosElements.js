import styled from "styled-components";

export const ArticlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #fdfae3;
  height: 100vh;
  align-items: center;
  /* margin-top: -80px; */
  justify-content: center;
`;

export const TituloWrap = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-top: 50px;
  /* border: red 1px solid; */
`;

export const ArtigosH1 = styled.h1`
  color: #f46036;
  text-align: left;
  font-weight: 800;
  font-size: 90px;
`;

export const ThumbnailContainer = styled.div`
  width: 90%;
  padding-top: 64px;
`;

export const Artigo = styled.div`
  display: grid;
  height: 416px;
  width: 360px;
  border: black 2px solid;
  justify-content: center;
  text-align: left;
  padding: 14px 14px 14px 14px;
`;

export const Headline = styled.h2`
  color: black;
  font-size: 20px;
  margin-top: -10px;
`;

export const Subtitle = styled.h3`
  color: black;
  font-size: 14px;
  font-family: "Lato";
  margin-top: -15px;
`;

export const Text = styled.p`
  color: black;
  font-size: 13px;
  font-family: "Lato";
`;
