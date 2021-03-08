import React from "react";
import styled, { css } from "styled-components";
import { FormattedMessage } from "react-intl";
import { Container, Title, useIsSmallScreen } from "../../shared";

const MissionStatement = styled.div<{ isMobileScreen: boolean }>`
  flex-grow: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 20px;
  width: 100%;
  ${({ isMobileScreen }) =>
    !isMobileScreen &&
    css`
      margin-right: 30px;
    `}
`;

const StyledHorizontalLine = styled.hr`
  width: 60%;
  margin-top: 0px;
  margin-bottom: 0px;
  margin-right: 70%;
`;

const ImageContainer = styled.div`
  flex-grow: 1;
  height: 65%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledImage = styled.img`
  width: 340px;
  height: 340px;
`;

const StyledContainer = styled(Container)<{ isMobileScreen: boolean }>`
  min-height: ${({ isMobileScreen }) => (isMobileScreen ? `100%` : `100vh`)};
  display: flex;
  align-items: center;
`;
const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Styled = styled.span`
  color: #666;
`;

const StyledTitle = styled(Title)`
  align-self: start;
`;

export const Mission = () => {
  const isMobileScreen = useIsSmallScreen();
  return (
    <StyledContainer isMobileScreen={isMobileScreen}>
      <StyledWrapper>
        <MissionStatement isMobileScreen={isMobileScreen}>
          <StyledTitle
            value={<FormattedMessage id="Home.Mission.Header" />}
          ></StyledTitle>
          <StyledHorizontalLine />
          <p>
            <FormattedMessage id="Home.Mission.Details.Paragraph1" />
          </p>
          {isMobileScreen && (
            <ImageContainer>
              <StyledImage src="/enric-ceo.jpg" />
              <Styled>
                <FormattedMessage id="Home.Mission.FounderImage.Description" />
              </Styled>
            </ImageContainer>
          )}
          <p>
            <FormattedMessage id="Home.Mission.Details.Paragraph2" />
          </p>
        </MissionStatement>
        {!isMobileScreen && (
          <ImageContainer>
            <StyledImage src="/enric-ceo.jpg" />
            <Styled>
              <FormattedMessage id="Home.Mission.FounderImage.Description" />
            </Styled>
          </ImageContainer>
        )}
      </StyledWrapper>
    </StyledContainer>
  );
};
