import styled from "styled-components";
import { ReactComponent as ArrowDownR } from "../../images/ArrowDown.svg";

export const StartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  overflow: hidden;

  width: 100vw;
  height: 100vh;

  background-color: #fefae0;
`;

export const TitleWrap = styled.div`
  width: 100%;
  max-width: 1200px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;

  cursor: pointer;

  &:hover {
    svg {
      margin-left: 20px;
      transition: 0.2s all ease;
    }
  }
`;

export const StartH1 = styled.a`
  position: relative;
  color: #f46036;

  font-family: Playfair Display;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 123.3%;

  text-decoration: none;
  text-decoration-line: none;

  &:visited {
    text-decoration: none;
    text-decoration-line: none;
    color: #f46036;
  }
`;

export const ArrowDown = styled(ArrowDownR)`
  width: 4%;
  height: auto;

  margin-left: 8px;
  transform: rotate(-0.25turn);
`;
