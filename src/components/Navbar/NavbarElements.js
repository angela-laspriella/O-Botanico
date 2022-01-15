import styled from "styled-components";

export const Nav = styled.nav`
  margin-top: 0;

  position: absolute;
  top: 0;
  padding: 0 30px;

  width: 100%;
  height: 80px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${({ darkbg }) => (darkbg ? "#fefae0" : "transparent")};
  font-size: 1rem;
  z-index: 10;

  @media screen and (max-width: 960) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 80px;
  z-index: 1;
  max-width: 1200px;
  width: 100%;
`;

export const MobileIcon = styled.div`
  display: block;
  cursor: pointer;
  color: #fff;
`;

export const MenuTrigger = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;

  color: #6e6e6e;

  @media screen and (max-width: 900px) {
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
  }

  &:hover {
    color: ${({ orangetext }) => (orangetext ? "#d7e2a1" : "#F46036")};
    transition: 0.2s ease-in-out;
  }
`;

export const Logo = styled.a`
  justify-self: center;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;

  color: #6e6e6e;
  cursor: pointer;

  text-decoration: none;
  text-decoration-line: none;

  @media screen and (max-width: 900px) {
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
  }

  &:hover {
    color: ${({ orangetext }) => (orangetext ? "#d7e2a1" : "#F46036")};
    transition: 0.2s ease-in-out;
  }
`;
