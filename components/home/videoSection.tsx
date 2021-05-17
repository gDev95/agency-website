import React from "react";
import ReactPlayer from "react-player";

import styled, { css } from "styled-components";
import { CoverImageContainer, useIsSmallScreen } from "../../shared";

const StyledRoot = styled.div<{ isMobileScreen: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ isMobileScreen }) => (isMobileScreen ? "36vh" : "48vh")};
  width: 100%;
`;

const StyledReactPlayer = styled(ReactPlayer)<{ isMobileScreen: boolean }>`
  ${({ isMobileScreen }) =>
    isMobileScreen &&
    css`
      width: 100% !important;
    `}
  height: 100% !important;
`;

interface PropsType {
  embeddedVideoUrl: string;
}

export const VideoSection = ({ embeddedVideoUrl }: PropsType) => {
  const isMobileScreen = useIsSmallScreen();
  return (
    <CoverImageContainer
      isMobileScreen={isMobileScreen}
      backgroundImage="/homepage-cover.png"
    >
      <StyledRoot isMobileScreen={isMobileScreen}>
        <StyledReactPlayer url={embeddedVideoUrl} />
      </StyledRoot>
    </CoverImageContainer>
  );
};
