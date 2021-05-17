import { useRouter } from "next/router";
import gql from "graphql-tag";
import React from "react";
import styled from "styled-components";
import { useQuery } from "@apollo/react-hooks";
import { Theme } from "../../shared/theme";
import { ArtistsProfileImage, useIsSmallScreen } from "../../shared";

const StyledRoot = styled.div`
  margin-bottom: 80px;
`

const ArtistCoverContainer = styled.div<{ coverImage: string }>`
  background: url(${({ coverImage }) => coverImage});
  background-size: cover;
  height: 100vh;
  background-repeat: no-repeat;
  position: relative;
  display:flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const StyledProfileImage = styled(ArtistsProfileImage)`
  border: 2px solid black;
`

const ArtistInformationContainer = styled.div`
  display:flex;
  flex-direction: column;
`

const ArtistHeadline = styled.div`
  width: 100%;
  text-align: center;
  color: ${Theme.white}
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
  const isMobileScreen = useIsSmallScreen();

  // show specific artist page
  return data ? (
    <StyledRoot>
      <ArtistCoverContainer coverImage={data.artist.basicInformation.coverImageUrl} >
        <StyledProfileImage src={data.artist.basicInformation.profileImageUrl} size={isMobileScreen ? 200 : 300} />
        <ArtistHeadline>
          <h1>{data.artist.basicInformation.name}</h1>
        </ArtistHeadline>
      </ArtistCoverContainer>
      <ArtistInformationContainer>


      </ArtistInformationContainer>

    </StyledRoot>
  ) : null;
};

export default ArtistsPage;
