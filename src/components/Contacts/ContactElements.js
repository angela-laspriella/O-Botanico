import styled from "styled-components";
export const Body = styled.div`
  // Add before styles
  width: 100vw;
  padding: 0;
  padding-top: 100px;
`;
export const Body1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  overflow: hidden;
  background-color: #161a15;
  width: 100%;
  height: 100vh;
`;
export const ContactContainer = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  align-items: left;
  flex-wrap: wrap;
  overflow: hidden;

  width: 100%;
  height: 80vh;
`;

export const ContactContainer2 = styled.div`
  width: 50%;

  position: relative;
  display: flex;
  min-width: fit-content;
  justify-content: flex-end;
  flex-direction: column;
  align-content: center;
  // outline: 1px solid green;

  @media screen and (min-width: 1050px) {
    height: 100%;
  }
  @media screen and (max-width: 1020px) {
    display: none;
  }
  @media screen and (max-width: 1350px) {
    margin-left: 6.510416666666667vw;
  }
`;
export const ContactContainer21 = styled.div`
  width: 50%;
  position: relative;
  display: flex;
  min-width: fit-content;
  justify-content: flex-end;
  flex-direction: column;
  align-content: center;
  //outline: 1px solid green;

  @media screen and (min-width: 1020px) {
    display: none;
  }
  @media screen and (max-width: 1350px) {
    margin-left: 6.510416666666667vw;
  }
`;

export const ContactContainer3 = styled.div`
  width: 30%;
  min-width: fit-content;
  display: flex;
  margin-left: 6.510416666666667vw;
  flex-direction: column;
  justify-content: flex-end;
  background-color: #161a15;
  // outline: 1px solid red;
  padding-bottom: 25px;
  @media screen and (max-width: 1020px) {
    padding-top: 25px;
    justify-content: flex-start;
  }
`;

export const ContactH1 = styled.h1`
  color: #e36944;
  font-weight: 800;
  font-size: calc(40px + 5vw);

  //outline: 1px solid blue;
`;
export const ContactH2 = styled.h2`
  position: relative;
  color: #282f26;
  font-weight: 800;
  font-size: 400%;
  z-index: 0;
  //outline: 1px solid blue;
`;
export const ContactH3 = styled.h3`
  position: relative;
  color: #fefae0;
  font-weight: 800;
  //font-size: 100%;
  font-size: calc(12px + 0.5vw);
  padding-left: 20px;
  // outline: 1px solid blue;
  @media screen and (max-width: 500px) {
    margin-bottom: 5px;
  }
`;
export const ContactP1 = styled.p`
  position: relative;
  color: #fefae0;
  font-family: "Lato", sans-serif;
  //font-size: 100%;
  padding-left: 20px;
  font-size: calc(12px + 0.5vw);
  //outline: 1px solid blue;
`;

//////////////////////////////////////////////////

export const Body2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #fefae0;
  width: 100%;
  height: 100vh;
  // outline: 1px solid red;
  // Add before styles
`;
export const ScheduleContainer = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  margin: 0;
  //justify-content: center;
  align-items: left;
  flex-wrap: wrap;
  overflow: hidden;

  width: 100%;
  height: 80vh;
  background-color: #fefae0;
  //outline: 1px solid blue;
`;

export const ScheduleContainer2 = styled.div`
  width: 50%;
  background-color: #fefae0;
  position: relative;
  display: flex;
  min-width: fit-content;
  justify-content: flex-end;
  flex-direction: column;
  align-content: center;
  //outline: 1px solid green;
  @media screen and (min-width: 1050px) {
    height: 100%;
  }
  @media screen and (max-width: 1020px) {
    display: none;
  }
  @media screen and (max-width: 1350px) {
    margin-left: 6.510416666666667vw;
  }
`;
export const ScheduleContainer21 = styled.div`
  width: 50%;
  position: relative;
  display: flex;
  min-width: fit-content;
  justify-content: flex-end;
  background-color: #fefae0;
  flex-direction: column;
  align-content: center;
  //outline: 1px solid green;
  @media screen and (min-width: 1050px) {
    height: 100%;
  }
  @media screen and (min-width: 1020px) {
    display: none;
  }
  @media screen and (max-width: 1350px) {
    margin-left: 6.510416666666667vw;
  }
`;

export const ScheduleContainer3 = styled.div`
  width: 30%;
  min-width: fit-content;
  display: flex;
  margin-left: 6.510416666666667vw !important;
  flex-direction: column;
  justify-content: flex-end;
  background-color: #fefae0;
  //outline: 1px solid red;
  padding-bottom: 25px;
`;

export const ScheduleH1 = styled.h1`
  color: #e36944;
  font-weight: 800;
  font-size: calc(40px + 5vw);

  // outline: 1px solid blue;
`;
export const ScheduleH2 = styled.h2`
  position: relative;
  color: #f3efd5;
  font-weight: 800;
  font-size: 400%;
  z-index: 0;
  //outline: 1px solid blue;
`;
export const ScheduleH3 = styled.h3`
  position: relative;
  color: #161a15;
  font-weight: 800;
  //font-size: 100%;
  font-size: calc(12px + 0.5vw);
  padding-left: 20px;
  //outline: 1px solid blue;
  @media screen and (max-width: 500px) {
    margin-bottom: 5px;
  }
`;
export const ScheduleP1 = styled.p`
  position: relative;
  color: #161a15;
  font-family: "Lato", sans-serif;
  //font-size: 100%;
  padding-left: 20px;
  font-size: calc(12px + 0.5vw);
  //outline: 1px solid blue;
`;
