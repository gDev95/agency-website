import { useQuery } from "@apollo/react-hooks";
import React, { useMemo } from "react";
import {
  getSocialMediaIcon,
  GET_ARTIST_QUERY,
  prepareLink,
  SocialMediaIconsType,
} from "../../shared";
import styled from "styled-components";
import { Link } from "@material-ui/core";

const StyledRoot = styled.div`
  display: flex;
  width: 200px;
  justify-content: space-between;
  align-items: center;
`;
type PropsType = {
  artistId: string;
};

export const SocialMediaList = ({ artistId, ...otherProps }: PropsType) => {
  const { data: artistData } = useQuery(GET_ARTIST_QUERY, {
    variables: { id: artistId },
  });

  const socialMediaItems = useMemo(() => {
    if (!artistData || !artistData.artist) {
      return null;
    }

    return Object.keys(artistData.artist.socialMediaLinks)
      .filter(key => {
        return (
          artistData.artist.socialMediaLinks[key] &&
          artistData.artist.socialMediaLinks[key].trim().length > 0 &&
          key !== "__typename"
        );
      })
      .map((id: string) => {
        const icon = getSocialMediaIcon(id);
        return { id, icon, link: artistData.artist.socialMediaLinks[id] };
      });
  }, [artistData]);

  return (
    <StyledRoot {...otherProps}>
      {socialMediaItems &&
        socialMediaItems.map(
          (socialMediaItem: SocialMediaIconsType & { link: string }) => (
            <Link href={prepareLink(socialMediaItem.link)}>
              {socialMediaItem.icon}
            </Link>
          ),
        )}
    </StyledRoot>
  );
};
