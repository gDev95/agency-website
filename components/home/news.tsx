import { useQuery } from "@apollo/react-hooks";
import React from "react";
import { Container, GET_NEWS_QUERY, prepareLink, Title } from "../../shared";
import ReactPlayer from "react-player";
import { Fade, Link } from "@material-ui/core";
import styled from "styled-components";
import { Theme } from "../../shared/theme";
import { useInView } from "react-intersection-observer";

const StyledRoot = styled(Container)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NewsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  margin-bottom: 56px;
`;

const NewsImage = styled.img`
  height: 300px;
  object-fit: cover;
`;

const NewsTitle = styled.div`
  background: grey;
  color: ${Theme.white};
  padding: 14px;
  font-size: 22px;
  font-weight: bold;
  height: 200px;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

const NewsPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 500px;
  width: 300px;
  margin: 14px;
  border: 3px solid black;
`;
const StyledExternalLink = styled(Link)`
  text-decoration: none !important;
`;
const StyledPlayer = styled(ReactPlayer)`
  max-height: 300px;
  max-width: 300px;
`;

export const News = () => {
  const { data } = useQuery(GET_NEWS_QUERY);

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.3,
  });

  return (
    <StyledRoot id="news" ref={ref}>
      <Title value="Latest updates" />
      <Fade in={inView} timeout={1000}>
        <NewsWrapper>
          {data
            ? data.news.map(
                ({
                  imageUrl,
                  externalLink,
                  videoLink,
                  title,
                }: {
                  imageUrl: string;
                  externalLink: string;
                  videoLink: string;
                }) => {
                  const media = imageUrl ? (
                    <NewsImage src={imageUrl} alt={title} />
                  ) : videoLink ? (
                    <StyledPlayer url={videoLink} />
                  ) : null;
                  return externalLink ? (
                    <StyledExternalLink href={prepareLink(externalLink)}>
                      <NewsPostContainer key={title}>
                        {media}
                        <NewsTitle>
                          <span>{title}</span>
                        </NewsTitle>
                      </NewsPostContainer>
                    </StyledExternalLink>
                  ) : (
                    <NewsPostContainer key={title}>
                      {media}
                      <NewsTitle>
                        <span>{title}</span>
                      </NewsTitle>
                    </NewsPostContainer>
                  );
                },
              )
            : null}
        </NewsWrapper>
      </Fade>
    </StyledRoot>
  );
};
