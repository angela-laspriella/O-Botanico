import styled from "styled-components";
import { ReactComponent as ArrowDownR } from "../../images/ArrowDown.svg";

export const StartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  overflow: hidden;

  width: 100vw;
  height: 100vh;
  background-color: #161a15;

  padding-top: 200px;
`;

export const PinkContainer = styled.div`
  overflow: hidden;

  width: 100vw;
  height: 100vh;
  background-color: #fefae0;
`;

export const TitleWrap = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-top: -5%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const StartH1 = styled.h1`
  position: relative;
  color: #f46036;

  font-family: Playfair Display;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 123.3%;
`;

export const ArrowDown = styled(ArrowDownR)`
  width: 4%;
  height: auto;

  margin-top: 16px;
`;
