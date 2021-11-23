import styled from "styled-components";
import { ReactComponent as ArrowDown } from "../../images/Arrow_one.svg";

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  overflow: hidden;
  width: 100vw;
  height: 100vh;
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
  width: 100%;
  max-width: 1200px;

  text-align: center;
`;

export const HeroH1 = styled.h1`
  color: #d7e2a1;

  font-weight: 800;
  font-size: 1000%;

  @media screen and (max-width: 850px) {
    font-size: 700%;
  }
`;
