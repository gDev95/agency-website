import { useRouter } from "next/router";
import gql from "graphql-tag";
import React from "react";
import styled from "styled-components";
import { useQuery } from "@apollo/react-hooks";

import { Cover } from "../../components/artist/cover";
import Link from "next/link";
import { TLabel } from "../../shared";

const StyledRoot = styled.div`
  margin-bottom: 80px;
`


const ArtistInformationContainer = styled.div`
  display:flex;
  flex-direction: column;
  width: 80%;
  margin: 56px auto;
`

const StyledLabel = styled.img
  `
  width: 100px;
  height: 100px;
  margin: 8px;
  cursor: pointer;
`

const LabelsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`

export const GET_ARTIST_QUERY = gql`
  query Artists($id: ID!) {
    artist(id: $id) {
      id
      basicInformation {
        name
        description
        profileImageUrl
        coverImageUrl
        logoUrl
      }
      advancedInformation {
        labels {
          logoUrl
          link
        }
      }
    }
  }
`;


const ArtistsPage = () => {
  const router = useRouter();
  const artistId = router.query.id;

  if (!artistId) {
    // go to artist overview page
    return <p>400 not found</p>;
  }

  const { data } = useQuery(GET_ARTIST_QUERY, { variables: { id: artistId } });

  const artist = data ? data.artist : null

  const prepareLink = (url: string) => {
    if (url.match(/https?/)) {
      return url
    }

    return `https://${url}`
  }
  // show specific artist page
  return artist ? (
    <StyledRoot>
      <Cover
        coverImageUrl={artist.basicInformation.coverImageUrl}
        artistName={artist.basicInformation.name}
        profileImageUrl={artist.basicInformation.profileImageUrl} />
      <ArtistInformationContainer>
        <h2>About {artist.basicInformation.name}</h2>
        <span>{artist.basicInformation.description}</span>
        <h2>Labels</h2>
        <LabelsWrapper>
          {artist.advancedInformation.labels.map((label: TLabel) => {
            return (
              <Link href={prepareLink(label.link)} passHref={true}>
                <StyledLabel src={label.logoUrl} />
              </Link>

            )
          })}
        </LabelsWrapper>
      </ArtistInformationContainer>

    </StyledRoot>
  ) : null;
};

export default ArtistsPage;
