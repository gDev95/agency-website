import React from 'react';
import styled from 'styled-components';
import { ArtistsProfileImage, useIsSmallScreen } from '../../shared';
import { Theme } from '../../shared/theme';

const ArtistCoverContainer = styled.div<{ coverImage: string }>`
  background: url(${({ coverImage }) => coverImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;

  height: 100vh;
  width: 100%;

  position: relative;
  display:flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const StyledProfileImage = styled(ArtistsProfileImage)`
  border: 2px solid black;
`

const ArtistHeadline = styled.div`
  width: 100%;
  text-align: center;
  color: ${Theme.white};`

type PropsType = {
  coverImageUrl: string,
  artistName: string,
  profileImageUrl: string
}

export const Cover = ({ coverImageUrl, artistName, profileImageUrl }: PropsType) => {
  const isMobileScreen = useIsSmallScreen();
  return (
    <ArtistCoverContainer coverImage={coverImageUrl} >
      <StyledProfileImage src={profileImageUrl} size={isMobileScreen ? 200 : 300} />
      <ArtistHeadline>
        <h1>{artistName}</h1>
      </ArtistHeadline>
    </ArtistCoverContainer>
  )
}