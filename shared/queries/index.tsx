import gql from "graphql-tag";

export const GET_PAGE_CONTENT = gql`
  query PageContent($id: ID!) {
    pageContent(id: $id) {
      slogan {
        en
        es
      }
      mission {
        en
        es
      }
      socialMedia {
        facebook
        instagram
        soundcloud
      }
    }
  }
`;
