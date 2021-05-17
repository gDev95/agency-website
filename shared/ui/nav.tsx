import React, { useState } from "react";
import styled, { css } from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

import { useIsSmallScreen } from "..";
import { useInView } from "react-intersection-observer";
import { Fade } from "@material-ui/core";
import { FormattedMessage } from "react-intl";
import { NoboBookingsLogo } from "./NoboBookingsLogo";
import { Theme } from "../theme";
import { NavLink } from "./NavLink";
import { LanguageSelector } from "./LanguageSelector";

const StyledNav = styled.nav`
  width: 100%;
`;
const NavList = styled.ul<{ isMobileScreen: boolean }>`
  display: flex;
  ${({ isMobileScreen }) =>
    isMobileScreen
      ? css`
          justify-content: space-evenly;
          align-items: center;
          flex-direction: column;
          padding: 0;
        `
      : css`
          justify-content: flex-end;
          align-items: center;
        `}
  flex: 1;
`;
const DesktopNavListItem = styled.li`
  margin-left: 20px;
  font-size: 18px;
  list-style-type: none;
  border: none;

  &:hover {
    border-bottom: 1px solid ${Theme.primary};
  }
`;
const StyledIconMenuWrapper = styled.div`
  transition: all 0.3s linear;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const StyledCloseIcon = styled(CloseIcon)`
  position: absolute;
  top: 30px;
  right: 30px;
  z-index: 2;
  cursor: pointer;
  color: ${Theme.white};
`;

const StyledMobileMenu = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: #000;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const StyledWrapper = styled.div<{ color: string }>`
  color: ${({ color }) => (color ? color : Theme.white)};
  position: relative;
  height: 80px;
  display: flex;
  width: 80%;
  margin: auto;
  justify-content: space-between;
  align-items: center;
`;

const MobileNavListItem = styled.li`
  font-size: 28px;
  list-style-type: none;
`;

const StyledNavWrapper = styled.div<{ isMobileScreen: boolean }>`
  position: absolute;
  background-color: transparent;
  z-index: 1;
  width: 100%;
`;

const StyledLanguageSelector = styled(LanguageSelector) <{
  color: string;
}>`
  ${({ color }) => css`
    color: ${color ? color : Theme.white};
  `}
  margin-left: 20px;
`;

type MenuItemsType = {
  name: string;
  link: string;
};

const menuItems: MenuItemsType[] = [
  { name: "Nav.Home", link: "/" },
  { name: "Nav.Artists", link: "#artists" },
  { name: "Nav.About", link: "#mission" }
];

export const Nav = ({ color, ...otherProps }: any) => {
  const isMobileScreen = useIsSmallScreen();

  const [isMenuOpen, setMenuOpen] = useState(false);
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.4
  });

  return (
    <StyledNavWrapper ref={ref} {...otherProps}>
      <Fade in={inView} timeout={1000}>
        <StyledNav>
          <StyledWrapper color={color}>
            <NavLink href="/">
              <NoboBookingsLogo
                width={64}
                height={64}
                src="/nobo-bookings.png"
              />
            </NavLink>
            {!isMobileScreen && (
              <NavList isMobileScreen={isMobileScreen}>
                {menuItems.map(item => (
                  <DesktopNavListItem key={item.name}>
                    <NavLink href={item.link} color={color}>
                      <FormattedMessage id={item.name} />
                    </NavLink>
                  </DesktopNavListItem>
                ))}
              </NavList>
            )}
            <StyledLanguageSelector color={color} />
            {isMobileScreen && (
              <>
                <StyledIconMenuWrapper onClick={() => setMenuOpen(!isMenuOpen)}>
                  <MenuIcon />
                </StyledIconMenuWrapper>
              </>
            )}
          </StyledWrapper>
          {isMenuOpen && (
            <Fade in={true} timeout={500}>
              <StyledMobileMenu>
                <StyledCloseIcon onClick={() => setMenuOpen(!isMenuOpen)} />
                <NavList isMobileScreen={isMobileScreen}>
                  {menuItems.map(item => (
                    <MobileNavListItem key={item.name}>
                      <NavLink href={item.link}>
                        <FormattedMessage id={item.name} />
                      </NavLink>
                    </MobileNavListItem>
                  ))}
                </NavList>
              </StyledMobileMenu>
            </Fade>
          )}
        </StyledNav>
      </Fade>
    </StyledNavWrapper>
  );
};
