import styled from "styled-components";
//import { ReactComponent as Point } from "../../images/NewPoint.svg";

import { ReactComponent as LineR } from "../../images/line.svg";

export const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  overflow: hidden;
`;

export const TimelineContent = styled.div`
  max-width: 1200px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

export const UCWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const UCContent = styled.div`
  height: fit-content;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const UCTitle = styled.h3`
  width: 350px;
  font-family: "Playfair Display", serif;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 123.3%;

  color: #f46036;

  @media screen and (max-width: 600px) {
    font-size: 32px;
    line-height: 123.3%;
  }
`;

export const UCText = styled.p`
  width: 450px;
  font-family: "Lato", sans-serif;

  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 123.3%;

  color: #fefae0;

  margin-top: 82px;

  @media screen and (max-width: 600px) {
    width: 400px;
    margin-top: 60px;

    font-size: 16px;
    line-height: 130%;
  }

  &:last-child {
    margin-top: 16px;
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

  @media screen and (max-width: 600px) {
    padding-left: 48px;
  }
`;

export const TimelineWrap = styled.div`
  height: 80%;
  margin-left: 150px;

  display: flex;
  flex-direction: column;
`;

export const ImageWrap = styled.div`
  img {
    width: auto;
    height: 100%;
  }
`;

export const TextWrap = styled.div`
  width: 300px;

  margin-right: 200px;
  color: white;
  padding-left: 24px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Text = styled.div`
  color: white;
`;

export const Subtext = styled.div`
  font-size: 80%;
  margin-bottom: 24px;
`;

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: row;
`;

export const LineWrap = styled.div`
  margin-left: 10%;

  width: 55%;
  height: 20px;

  background-color: red;
`;

export const Line = styled(LineR)`
  margin-left: 12%;
`;
