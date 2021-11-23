import styled from "styled-components";
//import { ReactComponent as Point } from "../../images/NewPoint.svg";

import { ReactComponent as ArrowDown } from "../../images/Arrow_one.svg";

export const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  overflow: hidden;

  padding-bottom: 200px;
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
  max-width: 600px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  width: 50%;

  display: inline-block;
  background-color: green;
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
`;

export const UCText = styled.p`
  font-family: "Lato", sans-serif;

  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 123.3%;

  color: #fefae0;

  margin-top: 82px;

  &:last-child {
    margin-top: 16px;
  }
`;

export const ScrollHorizontal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  height: 100vh;
  width: 100vw;

  margin-bottom: 400px;
  padding-left: 80px;

  background-color: red;
`;
