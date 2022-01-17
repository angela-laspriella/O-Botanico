import styled from "styled-components";

export const MainContainer = styled.div`
  width: 300px;

  padding-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  margin: auto;

  font-family: Lato;
  font-size: 18px;

  h4 {
    font-family: Lato;
    font-style: normal;
    font-weight: bolder;
    font-size: 20px;
    line-height: 25px;
  }

  div:first-child {
    background: white;
    padding: 20px 52px;
    border-radius: 32px;

    margin-bottom: 42px;

    button {
      color: black;
      background: white;
    }

    button:hover {
      color: white;
      background: green;
    }
  }

  button {
    font-family: Lato;
    font-style: normal;
    font-weight: bolder;
    font-size: 16px;
    line-height: 25px;
  }
`;

export const Button = styled.a`
  width: 100%;
  display: block;
  background: green;

  padding: 16px 0;
  color: white;

  font-family: Lato;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 25px;
  text-align: center;

  margin-bottom: 32px;

  border-radius: 16px;

  text-decoration: none;

  &:hover {
    text-decoration: none;
    background: white;
    color: green;
  }
`;
