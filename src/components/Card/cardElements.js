import styled from "styled-components";

export const Artigo = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 416px;
  width: 360px;
  background: #fdfae3;
  /* background: blue; */
  border: #161a15 2px solid;
  text-align: left;
  padding: 14px 14px 14px 14px;
  filter: drop-shadow(0px 2px 9px rgba(0, 0, 0, 0.25));
  text-decoration: none;
  text-decoration-line: none;

  &:hover {
    transform: scale(1.03);
    border: #f46036 2px solid;
    cursor: pointer;
  }

  div {
    background: transparent;
    width: 100%;
    height: fit-content;
  }
`;

export const ImgArt = styled.div`
  /* background: red; */
  width: 100%;
  height: fit-content;

  img {
    width: 100%;
  }
`;

export const Headline = styled.h2`
  color: #161a15;
  /* background: greenyellow; */
  font-size: 20px;
  line-height: 22px;

  margin-top: 20px;
`;

export const Subtitle = styled.h3`
  color: #161a15;
  /* background: purple; */
  padding-top: 5px;
  font-size: 14px;
  font-family: "Lato";
`;

export const Text = styled.p`
  color: #161a15;
  /* background: orange; */
  font-size: 13px;
  font-family: "Lato";

  margin-top: 20px;
`;
