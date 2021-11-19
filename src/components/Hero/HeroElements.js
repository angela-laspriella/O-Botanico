import styled from "styled-components";
//import { ReactComponent as Point } from "../../images/NewPoint.svg";
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  overflow: hidden;

  // Add before styles
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

export const StartWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;

  img:first-child {
    width: 180px;
    position: relative;
  }

  svg {
    fill: red;
  }

  img:nth-child(2) {
    width: 300px;
    position: absolute;
  }
`;

export const ScrollM = styled.div`
  color: white;
  margin-top: 105px;
  font-size: 110%;
`;

export const TitleWrap = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-top: 25%;
`;

export const HeroH1 = styled.h1`
  position: relative;
  color: #d7e2a1;

  font-weight: 800;
  font-size: 1000%;

  &:last-child {
    text-align: right;
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
