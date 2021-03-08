import React from "react";
import styled from "styled-components";

import { FormattedMessage } from "react-intl";

import { Container, useIsSmallScreen } from "../../shared";
import { Fade } from "@material-ui/core";

// https://github.com/microsoft/TypeScript/issues/37597
const SloganContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;

  /* Animations */
  &.mount-fade-in-appear {
    opacity: 0.01;
  }

  &.mount-fade-in-appear-active {
    opacity: 1;
    transition: opacity 1s ease-in;
  }
  background: rgba(0, 0, 0, 0.6);
`;

// https://github.com/microsoft/TypeScript/issues/37597
const SloganWrapper = styled(Container as any)`
  color: #fff;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px;
  width: 70%;

  transition: opacity 1s ease-in;
`;

const CoverImageContainer = styled.div<{
  isMobileScreen: boolean;
  backgroundImage: string;
}>`
	height:${({ isMobileScreen }) => (isMobileScreen ? "50vh" : "100vh")}
	background-color: grey;
	background-image: ${({ backgroundImage }) => `url(${backgroundImage})`}; 
	background-repeat: no-repeat;
	background-size: cover;
  background-attachment: fixed;
	background-position: center;
`;
const StyledButton = styled.button`
  background-color: transparent;
  border: 1px solid #fff;
  color: #fff;
  height: 50px;
  padding: 0 20px;
  font-size: 17px;
  text-decoration: none;
  cursor: pointer;
  text-transform: uppercase;
  border-radius: 3px;

  &:hover {
    color: #fff;
    border: 1px solid #ccc;
    font-weight: bold;
  }
  &:focus {
    border: 1px solid #aaa;
    outline: 0;
  }
`;

const StyledHorizontalLine = styled.hr<{ isMobileScreen: boolean }>`
  color: #fff;
  width: 80%;
`;

export const Introduction = () => {
  const isMobileScreen = useIsSmallScreen();

  return (
    <CoverImageContainer
      isMobileScreen={isMobileScreen}
      backgroundImage="/homepage-cover.png"
    >
      <Fade in={true} timeout={1000}>
        <SloganContainer>
          <SloganWrapper>
            <h2>
              <FormattedMessage id="Home.CompanyName" />
            </h2>

            <StyledHorizontalLine isMobileScreen={isMobileScreen} />

            <h1>
              <FormattedMessage id="Home.Slogan" />
            </h1>
          </SloganWrapper>
        </SloganContainer>
      </Fade>
    </CoverImageContainer>
  );
};
