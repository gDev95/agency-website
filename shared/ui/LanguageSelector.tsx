import React, { useState } from "react";
import styled from "styled-components";
import { useLanguage } from "../helpers";
import { SupportedLanguages } from "../helpers/useLanguage";
import { NavLink } from "./NavLink";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { Theme } from "../theme";

const StyledRoot = styled.div`
  display: flex;
  position: relative;
`;

const StyledNavLink = styled(NavLink)`
  margin-top: 10px;

  &:hover {
    color: ${Theme.primary};
  }
`;

const StyledDropdownMenu = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  top: 24px;
`;

const StyledDropdownAnchor = styled.a`
  cursor: pointer;
  align-items: center;
  display: flex;

  &:hover {
    color: ${Theme.primary};
  }
`;

export const LanguageSelector = ({ ...otherProps }: any) => {
  const { language: currentLanguage, locale: currentLocale } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledRoot {...otherProps}>
      <StyledDropdownAnchor onClick={() => setIsOpen(!isOpen)}>
        {currentLanguage}
        <KeyboardArrowDownIcon />
      </StyledDropdownAnchor>
      <StyledDropdownMenu isOpen={isOpen}>
        {SupportedLanguages.filter(
          language => language.locale !== currentLocale
        ).map(language => (
          <StyledNavLink key={language.name} href={language.link}>
            {language.name}
          </StyledNavLink>
        ))}
      </StyledDropdownMenu>
    </StyledRoot>
  );
};
