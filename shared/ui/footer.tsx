import { useQuery } from "@apollo/react-hooks";
import React, { ReactNode, useContext, useMemo } from "react";
import styled from "styled-components";
import { getSocialMediaIcon } from "../icons";
import { PageContentContext } from "../pageContent";
import { GET_PAGE_CONTENT } from "../queries";
import { FooterItem } from "./footerItem";

const FOOTER_HEIGHT = 48;

const StyledRoot = styled.div`
  height: ${FOOTER_HEIGHT}px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 54px;
`;

const FooterItems = styled.li`
  display: flex;
  width: 50%;
  justify-content: space-evenly;
`;

type FooterItemType = {
  icon: ReactNode;
  name: string;
  link: string;
};

export const Footer = () => {
  const pageId = useContext(PageContentContext);
  const { data: pageContentData } = useQuery(GET_PAGE_CONTENT, {
    variables: { id: pageId }
  });

  const footerItems: FooterItemType[] = useMemo(() => {
    return [
      {
        name: "facebook",
        link: pageContentData?.pageContent.socialMedia.facebook,
        icon: getSocialMediaIcon("facebook")
      },
      {
        name: "instagram",
        link: pageContentData?.pageContent.socialMedia.instagram,
        icon: getSocialMediaIcon("instagram")
      },
      {
        name: "soundCloud",
        link: pageContentData?.pageContent.socialMedia.soundCloud,
        icon: getSocialMediaIcon("soundCloud")
      }
    ];
  }, [pageContentData]);

  return (
    <StyledRoot>
      <FooterItems>
        {footerItems.map((item: FooterItemType) => {
          return (
            <FooterItem key={item.name} link={item.link}>
              {item.icon}
            </FooterItem>
          );
        })}
      </FooterItems>
    </StyledRoot>
  );
};
