import React, { useState } from "react";
import styled, { css } from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

import { useIsSmallScreen } from "..";
import { useInView } from "react-intersection-observer";
import { Fade } from "@material-ui/core";
import { FormattedMessage } from "react-intl";

const StyledNav = styled.nav`
  width: 100%;
  background-color: transparent;
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
`;
const StyledIconMenuWrapper = styled.div`
  transition: all 0.3s linear;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: absolute;
  top: 30px;
  right: 0;
  z-index: 2;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: #fff;
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

const StyledWrapper = styled.div`
  color: #fff;
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

type MenuItemsType = {
  name: string;
  link: string;
};

const menuItems: MenuItemsType[] = [
  { name: "Nav.Home", link: "/" },
  { name: "Nav.Artists", link: "/artists" },
  { name: "Nav.About", link: "/about" }
];

export const Nav = ({ ...otherProps }: any) => {
  const isMobileScreen = useIsSmallScreen();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0
  });
  return (
    <div ref={ref}>
      <Fade in={inView} timeout={1000}>
        <StyledNav {...otherProps}>
          <StyledWrapper>
            <h2>
              <StyledLink href="/">Nobo Bookings</StyledLink>
            </h2>
            {!isMobileScreen && (
              <NavList isMobileScreen={isMobileScreen}>
                {menuItems.map(item => (
                  <DesktopNavListItem key={item.name}>
                    <StyledLink href={item.link}>
                      <FormattedMessage id={item.name} />
                    </StyledLink>
                  </DesktopNavListItem>
                ))}
              </NavList>
            )}
            {isMobileScreen && (
              <>
                <StyledIconMenuWrapper onClick={() => setMenuOpen(!isMenuOpen)}>
                  {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                </StyledIconMenuWrapper>
              </>
            )}
          </StyledWrapper>
          {isMenuOpen && (
            <Fade in={true} timeout={500}>
              <StyledMobileMenu>
                <NavList isMobileScreen={isMobileScreen}>
                  {menuItems.map(item => (
                    <MobileNavListItem key={item.name}>
                      <StyledLink href={item.link}>
                        <FormattedMessage id={item.name} />
                      </StyledLink>
                    </MobileNavListItem>
                  ))}
                </NavList>
              </StyledMobileMenu>
            </Fade>
          )}
        </StyledNav>
      </Fade>
    </div>
  );
};