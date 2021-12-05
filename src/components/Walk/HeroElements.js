import styled from "styled-components";
import { ReactComponent as ArrowDown } from "../../images/Arrow_one.svg";

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  overflow: hidden;
  width: 100vw;
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

  &:first-child {
    margin-top: 0;
  }
`;

export const HeroH1 = styled.h1`
  color: #d7e2a1;

  font-weight: 800;
  font-size: 1000%;

  @media screen and (max-width: 850px) {
    font-size: 700%;
  }
`;

export const InfoWrap = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  margin-top: 300px;
`;

export const Text = styled.p`
  width: 50%;

  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 25px;

  color: #fefae0;

  padding-right: 200px;
`;

export const InfoImg = styled.div`
  width: 50%;
`;
