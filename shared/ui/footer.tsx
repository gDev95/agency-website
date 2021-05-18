import React from "react";
import styled from "styled-components";
import { footerItems, FooterItemType } from "../footerItems";
import { FooterItem } from "./footerItem";

const FOOTER_HEIGHT = 48;

const StyledRoot = styled.div`
  height: ${FOOTER_HEIGHT}px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FooterItems = styled.li`
  display: flex;
  width: 50%;
  justify-content: space-evenly;
`;

export const Footer = () => {
  return (
    <StyledRoot>
      <FooterItems>
        {footerItems.map((item: FooterItemType) => {
          return (
            <FooterItem key={item.name} link={item.link}>
              {item.icon}
            </FooterItem>
          );
        })}
      </FooterItems>
    </StyledRoot>
  );
};
