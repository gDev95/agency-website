import React from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";
import { Container, Title, useIsSmallScreen } from "../shared";

const MissionStatement = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  font-size: 20px;
  width: 100%;
  margin-right: 30px;
`;

const ImageContainer = styled.div`
  flex-grow: 1;
  height: 65%;
  width: 65%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const StyledContainer = styled(Container)`
  margin: 64px auto 64px auto;
`;
const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Styled = styled.span`
  color: #666;
`;

export const Mission = () => {
  const isMobileScreen = useIsSmallScreen();
  return (
    <StyledContainer>
      <Title value={<FormattedMessage id="Home.Mission.Header" />}></Title>
      <StyledWrapper>
        <MissionStatement>
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
