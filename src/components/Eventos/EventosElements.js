import styled from "styled-components";
//import { ReactComponent as Point } from "../../images/NewPoint.svg";

import { ReactComponent as LineR } from "../../images/line.svg";

export const TimelineContainer = styled.div`
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  background-color: #fefae0;
  @media screen and (min-width: 1050px) {
    overflow: hidden;
  }
  @media screen and (max-width: 1050px) {
    overflow-x: visible;
    overflow-y: hidden;
  }
`;

export const TimelineContent = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media screen and (min-width: 1050px) {
    display: flex;
  }
  @media screen and (max-width: 1050px) {
    display: none;
  }
`;
export const TimelineContent2 = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  width: 100%;
  overflow-y: hidden;
  @media screen and (min-width: 1050px) {
    display: none;
  }
  @media screen and (max-width: 1050px) {
    display: flex;
  }
`;

export const Horizontal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const ScrollHorizontal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  height: 100vh;
  width: 100vw;

  padding-left: 92px;
`;

export const TimelineWrap = styled.div`
  height: 80%;
  margin-left: 50px;

  display: flex;
  flex-direction: column;
`;

export const ImageWrap = styled.div`
  margin-left: 50px;
`;

export const MonthText = styled.h1`
  font-size: 170px;
  color: #f3efd5;
`;
export const Image = styled.div`
  position: relative;
  img {
    width: 300px;
    height: 60%;
  }
`;
export const Title = styled.h1`
  position: absolute;
  bottom: 50px;
  left: 30px;
  font-size: 15px;
  color: white;
`;
export const Date = styled.p`
  position: absolute;
  bottom: 35px;
  left: 30px;
  font-size: 15px;
  color: white;
`;
export const PageTitle = styled.h1`
  font-size: 50px;
  padding-left: 50px;
  min-width: fit-content;
  color: #f46036;
`;

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: row;
`;
