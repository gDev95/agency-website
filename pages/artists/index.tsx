import { useRouter } from "next/router";
import React, { useContext, useEffect, useMemo, useState } from "react";
import styled, { css } from "styled-components";
import { useQuery } from "@apollo/react-hooks";

import { Cover } from "../../components/artist/cover";
import Link from "next/link";
import {
  GET_ARTIST_QUERY,
  GET_PAGE_CONTENT,
  PageContentContext,
  TLabel
} from "../../shared";
import { useIntl } from "react-intl";
import { prepareLink } from "../../shared";
import { SocialMediaList } from "../../components/artist/socialMedia";
import { Theme } from "../../shared/theme";

const StyledRoot = styled.div`
  margin-bottom: 80px;
`;

const ArtistInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 56px auto;
`;

const StyledLabel = styled.img`
  width: 100px;
  height: 100px;
  margin: 8px;
  cursor: pointer;
`;

const LabelsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const ContactDetailsWrapper = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  flex-direction: column;
  margin-top: 54px;

  font-size: 20px;
`;

const ContactDetail = styled.span`
  margin-top: 8px;
`;

const StyledEmailLink = styled.a`
  text-decoration: none;
  color: ${Theme.primary};

  &:hover {
    border-bottom: 1px solid ${Theme.secondary};
  }
`;

const StyledPhoneNumber = styled.a`
  text-decoration: none;
  color: ${Theme.secondary};

  &:hover {
    border-bottom: 1px solid ${Theme.primary};
  }
`;

const SetupContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledSetupList = styled.ul`
  display: flex;
`;

const StyledDescription = styled.div<{
  expanded: boolean;
  isLongDescription: boolean;
}>`
  ${({ expanded, isLongDescription }) =>
    !isLongDescription || expanded
      ? css`
          height: 100%;
        `
      : css`
          height: 220px;
          overflow: hidden;
        `}
`;

const ReadMoreButton = styled.span`
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
`;

const ArtistsPage = () => {
  const router = useRouter();
  const artistId = router.query.id;

  useEffect(() => {
    if (!artistId || typeof artistId !== "string") {
      // go to artist overview page
      router.push("/");
    }
  }, [artistId, router]);

  const { formatMessage } = useIntl();
  const { data: artistData } = useQuery(GET_ARTIST_QUERY, {
    variables: { id: artistId }
  });

  const [expandDescription, setExpandDescription] = useState<boolean>(false);

  const pageId = useContext(PageContentContext);
  const { data: pageContentData } = useQuery(GET_PAGE_CONTENT, {
    variables: { id: pageId }
  });

  const artist = artistData ? artistData.artist : null;
  const isLongDescription = useMemo(
    () => artist?.basicInformation.description.length > 700,
    [artist]
  );

  return artist ? (
    <StyledRoot>
      <Cover
        coverImageUrl={artist.basicInformation.coverImageUrl}
        artistName={artist.basicInformation.name}
        profileImageUrl={artist.basicInformation.profileImageUrl}
      />
      <ArtistInformationContainer>
        <SocialMediaList artistId={artistId as string} />
        <h2>{formatMessage({ id: "Artist.Biography" })}</h2>
        <StyledDescription
          expanded={expandDescription}
          isLongDescription={isLongDescription}
        >
          {artist.basicInformation.description}
        </StyledDescription>

        {isLongDescription && !expandDescription && (
          <ReadMoreButton onClick={() => setExpandDescription(true)}>
            {formatMessage({ id: "Artist.Description.ReadMore" })}
          </ReadMoreButton>
        )}
        <h2>{formatMessage({ id: "Artist.Labels" })}</h2>
        <LabelsWrapper>
          {artist.advancedInformation.labels.map((label: TLabel) => {
            return (
              <Link href={prepareLink(label.link)} passHref={true}>
                <StyledLabel src={label.logoUrl} />
              </Link>
            );
          })}
        </LabelsWrapper>
        <h2>{formatMessage({ id: "Artist.Setup" })}</h2>
        <SetupContainer>
          <StyledSetupList>
            {artist.advancedInformation.setup.equipment.map((item: string) => (
              <li>{item}</li>
            ))}
          </StyledSetupList>
          <img src={artist.advancedInformation.setup.equipmentImageUrl} />
        </SetupContainer>
        <h2>{formatMessage({ id: "Artist.Hospitality" })}</h2>
        <ul>
          {artist.advancedInformation.hospitality.map((item: string) => (
            <li>{item}</li>
          ))}
        </ul>
        <ContactDetailsWrapper>
          <span>{formatMessage({ id: "Artist.ContactDetails" })}</span>
          <ContactDetail>
            <StyledEmailLink
              href={`mailto:${pageContentData?.pageContent?.contactDetails.email}`}
            >
              {pageContentData?.pageContent?.contactDetails.email}
            </StyledEmailLink>
          </ContactDetail>
          <ContactDetail>
            <StyledPhoneNumber
              href={`tel:${pageContentData?.pageContent?.contactDetails.phone}`}
            >
              {pageContentData?.pageContent?.contactDetails.phone}
            </StyledPhoneNumber>
          </ContactDetail>
        </ContactDetailsWrapper>
      </ArtistInformationContainer>
    </StyledRoot>
  ) : null;
};

export default ArtistsPage;
