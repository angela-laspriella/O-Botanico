import styled from "styled-components";
import { ReactComponent as ArrowDown } from "../../images/Arrow_one.svg";

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  overflow: hidden;
`;

export const HeroContent = styled.div`
  max-width: 1200px;
  padding-top: 200px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

export const TitleWrap = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-top: -5%;
`;

export const HeroH1 = styled.h1`
  position: relative;
  color: #d7e2a1;

  font-weight: 800;
  font-size: 1000%;

  &:last-child {
    margin-left: 142px;
  }

  @media screen and (max-width: 850px) {
    font-size: 700%;

    &:last-child {
      text-align: left;
    }
  }
`;

export const HeroH3 = styled.h1`
  color: #d7e2a1;

  font-weight: 600;
  font-size: 300%;
`;

export const ScrollWrap = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const ScrollImage = styled.div`
  width: auto;
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowP = styled.div`
  font-style: normal;

  font-family: "Lato", sans-serif;
  font-weight: 200;
  font-size: 24px;
  line-height: 102.8%;

  color: #6e6e6e;
  text-align: center;
`;

export const ArrowSymbol = styled(ArrowDown)`
  width: 20%;
  height: auto;

  margin-top: 16px;
`;

export const ImageWrap = styled.img`
  width: 75%;
  height: auto;

  margin-top: 16px;
`;
