import React from "react";
import {
  SidebarContainer,
  NavbarContainer,
  Logo,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElements";

import { NavLinks } from "../../data/data.js";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <NavbarContainer>
        <Logo>O Botânico</Logo>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
      </NavbarContainer>

      <SidebarWrapper>
        <SidebarMenu>
          {NavLinks.map((item, index) => {
            return (
              <>
                <SidebarLink to={item.tag} onClick={toggle}>
                  {item.name}
                </SidebarLink>
              </>
            );
          })}
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
