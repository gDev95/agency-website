import React from "react";
import styled from "styled-components";

import { Mission } from "../components/home/mission";
import { Introduction } from "../components/home/introduction";
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
      <ArtistOverview />
    </StyledSection>
  );
};
