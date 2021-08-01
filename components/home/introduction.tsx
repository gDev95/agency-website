import React, { useContext } from "react";
import styled from "styled-components";

import { FormattedMessage } from "react-intl";

import {
  Container,
  GET_PAGE_CONTENT_QUERY,
  useIsSmallScreen,
} from "../../shared";
import { Fade } from "@material-ui/core";
import { Theme } from "../../shared/theme";
import { useQuery } from "@apollo/react-hooks";
import { useLanguage } from "../../shared/helpers";
import { PageContentContext } from "../../shared/pageContent";
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
  color: ${Theme.white};
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px;
  width: 70%;

  transition: opacity 1s ease-in;
`;

const StyledRoot = styled.div<{
  isMobileScreen: boolean;
}>`
  height: 100vh;
  background: url("/homepage-cover.png");
  background-color: grey;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
`;

const StyledHorizontalLine = styled.hr<{ isMobileScreen: boolean }>`
  border: 1px solid ${Theme.primary};
  width: 80%;
`;

export const Introduction = () => {
  const isMobileScreen = useIsSmallScreen();
  const pageId = useContext(PageContentContext);
  const { data: pageContentData } = useQuery(GET_PAGE_CONTENT_QUERY, {
    variables: { id: pageId },
  });
  const { locale } = useLanguage();
  return (
    <StyledRoot isMobileScreen={isMobileScreen}>
      <Fade in={true} timeout={1000}>
        <SloganContainer>
          <SloganWrapper>
            <h2>
              <FormattedMessage id="Home.CompanyName" />
            </h2>

            <StyledHorizontalLine isMobileScreen={isMobileScreen} />

            <h1>{pageContentData?.pageContent?.slogan[locale]}</h1>
          </SloganWrapper>
        </SloganContainer>
      </Fade>
    </StyledRoot>
  );
};
