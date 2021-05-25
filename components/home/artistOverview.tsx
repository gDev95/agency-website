import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import { useQuery } from "@apollo/react-hooks";
import {
  ALL_ACTIVE_ARTISTS_QUERY,
  ArtistsProfileImage,
  TArtist,
  Title,
  useIsSmallScreen
} from "../../shared";
import Link from "next/link";
import { Fade } from "@material-ui/core";
import { useInView } from "react-intersection-observer";
import { Theme } from "../../shared/theme";

const ARTIST_PROFILE_IMAGE_SIZE = 266;
const ARTIST_PADDING_VERTICAL = 56;
const ARTIST_PADDING_HORIZONTAL = 24;

const StyledSection = styled.section<{ isMobileScreen: boolean }>`
  width: 80%;
  display: flex;
  margin: 24px auto;
  flex-direction: column;
  height: ${({ isMobileScreen }) => (isMobileScreen ? `100%` : `100vh`)};
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
  border: 1px solid ${Theme.primary};
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
  position: relative;
  padding: ${ARTIST_PADDING_VERTICAL}px ${ARTIST_PADDING_HORIZONTAL}px;
  cursor: pointer;
`;

const AristNameOverlay = styled.div`
  /* OUTER POSITIONING */
  position: absolute;
  top: ${ARTIST_PADDING_VERTICAL}px;
  left: ${ARTIST_PADDING_HORIZONTAL}px;
  height: ${ARTIST_PROFILE_IMAGE_SIZE}px;
  width: ${ARTIST_PROFILE_IMAGE_SIZE}px;
  /* INNER LAYOUT */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  background: rgb(0, 0, 0, 0.6);
  border-radius: ${ARTIST_PROFILE_IMAGE_SIZE / 2}px;
  color: ${Theme.white};
`;
const ArtistContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 80%;
  margin: 0 auto;
`;

export const ArtistOverview = () => {
  const { data } = useQuery(ALL_ACTIVE_ARTISTS_QUERY, {
    variables: { isDraft: false }
  });
  const [hoveredArtistId, setHoveredArtistId] = useState<string | null>();
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.1
  });
  const isMobileScreen = useIsSmallScreen();
  return (
    <StyledSection isMobileScreen={isMobileScreen} id="artists">
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
                data.artists &&
                data.artists.map(
                  (
                    artist: Omit<TArtist, "advancedInformation" | "socialMedia">
                  ) => (
                    <Link
                      key={artist.id}
                      href={{
                        pathname: "/artists",
                        query: { id: artist.id }
                      }}
                    >
                      <StyledArtistContent
                        onMouseEnter={() => setHoveredArtistId(artist.id)}
                        onMouseLeave={() => setHoveredArtistId(null)}
                      >
                        <Fade in={hoveredArtistId === artist.id} timeout={500}>
                          <AristNameOverlay>
                            {artist.basicInformation.name}
                          </AristNameOverlay>
                        </Fade>
                        <ArtistsProfileImage
                          src={artist.basicInformation.profileImageUrl}
                          size={ARTIST_PROFILE_IMAGE_SIZE}
                        />
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
