import React from "react";
import ReactPlayer from "react-player";

import styled, { css } from "styled-components";
import { useIsSmallScreen } from "../../shared";

const StyledRoot = styled.div<{ isMobileScreen: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ isMobileScreen }) => (isMobileScreen ? "36vh" : "48vh")};
  width: 100%;
  background-color: #232323;
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
    <StyledRoot isMobileScreen={isMobileScreen}>
      <StyledReactPlayer url={embeddedVideoUrl} />
    </StyledRoot>
  );
};
