import React from "react";
import styled from "styled-components";

import { Mission } from "../components/home/mission";
import { Introduction } from "../components/home/introduction";
import { VideoSection } from "../components/home/videoSection";
import { ArtistOverview } from "../components/home/artistOverview";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: space-between;
`;

export const Home = () => {
  return (
    <StyledSection>
      <Introduction />
      <Mission />
      <VideoSection embeddedVideoUrl="https://www.youtube.com/watch?v=Jb4prVsXkZU&ab_channel=BretCopeland" />
      <ArtistOverview />
    </StyledSection>
  );
};
