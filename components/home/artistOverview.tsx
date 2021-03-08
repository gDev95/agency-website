import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { ArtistsProfileImage, TArtist, Title } from "../../shared";
import Link from "next/link";
import { Fade } from "@material-ui/core";
import { useInView } from "react-intersection-observer";

const StyledSection = styled.section`
  width: 80%;
  display: flex;
  margin: 24px auto;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
`;

const StyledHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: uppercase;
`;

const StyledHorizontalLine = styled.hr`
  width: 30%;
  margin-top: 2px;
  margin-bottom: 0px;
`;

const StyledTitle = styled(Title)`
  margin-bottom: 0 !important;
`;

const StyledSubheader = styled.h5`
  margin-top: 8px;
  margin-bottom: 8px;
  color: #bfbfbf;
`;

const StyledArtistContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 56px 0;
  align-items: center;
  flex-wrap: wrap;
  cursor: pointer;
`;

const StyledArtistName = styled.div`
  margin-top: 8px;
`;
const ArtistContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  margin: 0 auto;
`;

export const ALL_ACTIVE_ARTISTS_QUERY = gql`
  query Artists {
    artists(isDraft: false) {
      id
      basicInformation {
        name
        profileImageUrl
      }
    }
  }
`;

export const ArtistOverview = () => {
  const { data } = useQuery(ALL_ACTIVE_ARTISTS_QUERY);
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.1
  });

  return (
    <StyledSection>
      <div ref={ref}>
        <Fade in={inView} timeout={1000}>
          <div>
            <StyledHeaderWrapper>
              <StyledTitle
                value={<FormattedMessage id="Home.ArtistOverview.Header" />}
              />
              <StyledSubheader>
                <FormattedMessage id="Home.ArtistOverview.Subheader" />
              </StyledSubheader>
              <StyledHorizontalLine />
            </StyledHeaderWrapper>
            <ArtistContainer>
              {data &&
                data.artists.map(
                  (
                    artist: Omit<TArtist, "advancedInformation" | "socialMedia">
                  ) => (
                    <Link
                      href={{
                        pathname: "/artists",
                        query: { id: artist.id }
                      }}
                    >
                      <StyledArtistContent>
                        <ArtistsProfileImage
                          src={artist.basicInformation.profileImageUrl}
                          size="100"
                        />
                        <StyledArtistName>
                          {artist.basicInformation.name}
                        </StyledArtistName>
                      </StyledArtistContent>
                    </Link>
                  )
                )}
            </ArtistContainer>
          </div>
        </Fade>
      </div>
    </StyledSection>
  );
};
