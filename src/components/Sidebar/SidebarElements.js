import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import { MdClear } from "react-icons/md";

export const SidebarContainer = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: fixed;
  z-index: 999;
  width: 100vw;
  height: 100%;
  background: #d7e2a1;

  transition: 0.3s ease-in-out;

  // if open you can see it, if not is 0
  /* 
    Inline If-Else with Conditional Operator. The conditional (ternary) operator is the only JavaScript operator 
    that takes three operands: a condition followed by a question mark (?), 
    then an expression to execute if the condition is truthy 
    followed by a colon (:), and finally the expression to execute 
    if the condition is falsy. This operator is frequently used 
    as a shortcut for the if statement. */

  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  //opacity: ${(isOpen) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  height: 80px;
  z-index: 1;
  max-width: 1200px;
  width: 100%;

  margin-bottom: auto;
`;
export const Logo = styled.p`
  justify-self: center;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;

  margin: auto;

  color: #6e6e6e;
  cursor: pointer;

  &:hover {
    color: #f46036;
    transition: 0.2s ease-in-out;
  }
`;

export const CloseIcon = styled(MdClear)`
  color: #161a15;
  margin-right: 16px;

  &:hover {
    color: #f46036;
    transition: 0.2s ease-in-out;
  }
`;

export const Icon = styled.div`
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  width: 100%;
  max-width: 1200px;

  display: flex;
  justify-content: flex-start;

  margin: auto;
  padding-left: 42px;
`;

export const SidebarMenu = styled.li`
  width: fit-content;
  height: 500px;
  max-width: 1200px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 40px;

  color: red;

  @media screen and (max-width: 900px) {
    height: 350px;
  }

  @media screen and (max-width: 450px) {
    height: 250px;
  }
`;

export const SidebarLink = styled.a`
  font-size: 625%;
  font-weight: bold;

  text-decoration: none;
  text-decoration-line: none;

  color: #161a15;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  counter-increment: li;

  @media screen and (max-width: 900px) {
    font-size: 400%;
  }

  @media screen and (max-width: 450px) {
    font-size: 250%;
  }

  a {
    text-decoration: none;
    text-decoration-line: none;
    color: #161a15;
  }

  a:visited {
    text-decoration: none;
    text-decoration-line: none;
    color: #161a15;
  }

  a:before {
    content: "0" counter(li) ".";
    margin-right: 16px;
    vertical-align: text-top;

    display: inline-block;

    font-style: normal;
    font-size: 36px;

    @media screen and (max-width: 900px) {
      font-size: 20px;
    }
  }

  a:hover {
    color: #f46036;
    transition: 0.2s ease-in-out;
    list-style: none;
    text-decoration: none;

    &:before {
      vertical-align: baseline;
      color: transparent;
      content: "---";
      text-decoration: underline;
      text-decoration-color: #f46036;

      font-size: 80px;

      @media screen and (max-width: 900px) {
        font-size: 50px;
      }
    }
  }
`;
