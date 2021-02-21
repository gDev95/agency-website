import React from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";

const StyledRoot = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48vh;
  background-color: #232323;
`;

interface PropsType {
  embeddedVideoUrl: string;
}

export const VideoSection = ({ embeddedVideoUrl }: PropsType) => {
  return (
    <StyledRoot>
      <ReactPlayer url={embeddedVideoUrl} />
    </StyledRoot>
  );
};
