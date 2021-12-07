import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  overflow: hidden;
  width: 100vw;

  padding-bottom: 100px;
`;

export const HeroContent = styled.div`
  max-width: 1200px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

export const TitleWrap = styled.div`
  width: 60%;
  max-width: 1200px;

  margin-top: 300px;

  text-align: center;

  @media screen and (max-width: 1000px) {
    margin-top: 150px;
  }

  &:first-child {
    margin-top: 0;
  }
`;

export const HeroH1 = styled.h1`
  color: #d7e2a1;

  font-weight: 800;
  font-size: 1000%;

  @media screen and (max-width: 1000px) {
    font-size: 480%;
  }
`;

export const InfoWrap = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  margin-top: 300px;

  @media screen and (max-width: 1000px) {
    flex-direction: column;

    margin-top: 150px;
  }
`;

export const TextWrap = styled.p`
  width: 50%;

  display: flex;
  justify-content: center;
  align-content: center;

  @media screen and (max-width: 1000px) {
    margin-top: 42px;
    width: 100%;
  }
`;

export const Text = styled.p`
  width: 70%;

  display: flex;
  justify-content: center;
  align-content: center;

  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 25px;

  color: #fefae0;
`;

export const ImgWrap = styled.p`
  width: 50%;

  display: flex;
  justify-content: center;
  align-content: center;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

export const InfoImg = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-content: center;

  img {
    width: 100%;
  }

  @media screen and (max-width: 1000px) {
    width: 80%;
  }
`;
