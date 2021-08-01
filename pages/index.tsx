import React from "react";
import styled from "styled-components";

import { Mission } from "../components/home/mission";
import { Introduction } from "../components/home/introduction";
import { ArtistOverview } from "../components/home/artistOverview";
import { News } from "../components/home/news";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: space-between;
`;

const Home = () => {
  return (
    <>
      <StyledSection>
        <Introduction />
        <Mission />
        <ArtistOverview />
        <News />
      </StyledSection>
    </>
  );
};

export default Home;
