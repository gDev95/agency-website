import React, { useContext } from "react";
import { Theme } from "../../shared/theme";
import { GET_PAGE_CONTENT_QUERY, PageContentContext } from "../../shared";
import { useQuery } from "@apollo/react-hooks";
import styled from "styled-components";
import { useIntl } from "react-intl";

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

export const Contact = () => {
  const pageId = useContext(PageContentContext);
  const { data: pageContentData } = useQuery(GET_PAGE_CONTENT_QUERY, {
    variables: { id: pageId },
  });

  const { formatMessage } = useIntl();

  return (
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
  );
};
