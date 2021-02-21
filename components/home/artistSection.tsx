import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const StyledSection = styled.section`
  width: 80%;
  display: flex;
  margin: 24px auto;
  font-size: 13px;
  flex-direction: column;
  height: 100%;
`;

const StyledHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: uppercase;
`;

const StyledHorizontalLine = styled.hr`
  width: 30%;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const StyledHeader = styled.h1`
  margin-bottom: 0;
`;

const StyledSubheader = styled.h3`
  margin-top: 8px;
  margin-bottom: 8px;
  color: #bfbfbf;
`;

const StyledArtistContent = styled.div`
  display: flex;
  justify-content: center;
  padding: 56px 0;
  align-items: center;
  flex-wrap: wrap;
`;

const ArtistContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: auto;
`;

export const ALL_ARTISTS_QUERY = gql`
  query Artists {
    artists {
      id
      basicInformation {
        name
        profileImageUrl
      }
    }
  }
`;

export const ArtistOverview = () => {
  const { data } = useQuery(ALL_ARTISTS_QUERY);
  console.log("Data of artists", data);
  return (
    <StyledSection>
      <StyledHeaderWrapper>
        <StyledHeader>
          <FormattedMessage id="Home.ArtistOverview.Header" />
        </StyledHeader>

        <StyledSubheader>
          <FormattedMessage id="Home.ArtistOverview.Subheader" />
        </StyledSubheader>
        <StyledHorizontalLine />
      </StyledHeaderWrapper>
      <ArtistContainer>
        {data &&
          data.artists.map((artist: any) => (
            <StyledArtistContent>
              <span>name: {artist.basicInformation.name}</span>
              <img src={artist.basicInformation.profileImageUrl} />
            </StyledArtistContent>
          ))}
      </ArtistContainer>
    </StyledSection>
  );
};
