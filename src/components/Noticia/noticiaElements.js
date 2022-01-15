import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  background: #fdfae3;
  height: fit-content;
  justify-content: center;

  min-height: 100vh;
`;

export const ReturnIcon = styled(LinkR)`
  display: flex;
  width: fit-content;
  height: 100px;
  /* background: red; */
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0 0 0 100px;
  font-size: 1.8rem;
  cursor: pointer;
  color: #6e6e6e;
`;

export const NoticiaContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: transparent;
  align-items: center;
  justify-content: center;
  padding: 20px 70px 0 100px;

  width: 100vw;
  height: fit-content;

  @media screen and (max-width: 1220px) {
    padding-left: 50px;
    padding-right: 10px;
  }

  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    padding-right: 10px;
  }
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  margin-bottom: 20px;
  width: 50%;

  img {
    width: 70%;
    height: auto;
  }

  @media screen and (max-width: 1220px) {
    padding-top: 0;
  }

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

export const TextoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 60px 60px 20px;
  width: 50%;

  @media screen and (max-width: 1220px) {
    padding: 30px;
  }

  @media screen and (max-width: 900px) {
    width: 100%;
    padding: 0 45px;
  }

  @media screen and (max-width: 760px) {
    padding: 20px;
  }
`;

export const Cabecalho = styled.h1`
  color: #f46036;
  text-align: left;
  font-size: 60px;
  font-family: "Playfair Display";
  font-weight: bold;

  @media screen and (max-width: 1220px) {
    font-size: 56px;
  }

  @media screen and (max-width: 1000px) {
    font-size: 50px;
  }

  @media screen and (max-width: 760px) {
    font-size: 38px;
  }
`;

export const Subtitulo = styled.h2`
  color: #f46036;
  font-size: 30px;
  font-family: "Lato";
  font-weight: normal;

  @media screen and (max-width: 1220px) {
    font-size: 26px;
  }

  @media screen and (max-width: 1000px) {
    font-size: 22px;
  }

  @media screen and (max-width: 760px) {
    font-size: 18px;
  }
`;

export const Corpo = styled.p`
  color: #000000;
  font-size: 16px;
  font-family: "Lato";
  font-weight: normal;
  padding-top: 35px;

  @media screen and (max-width: 1220px) {
    font-size: 14px;
  }
`;
