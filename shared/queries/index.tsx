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
        soundCloud
      }
      contactDetails {
        phone
        email
      }
    }
  }
`;

export const ALL_ACTIVE_ARTISTS_QUERY = gql`
  query Artists($isDraft: Boolean!) {
    artists(isDraft: $isDraft) {
      id
      basicInformation {
        name
        profileImageUrl
        isDraft
      }
    }
  }
`;

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
        setup {
          equipmentImageUrl
          equipment
        }
        hospitality
      }
      socialMediaLinks {
        facebook
        instagram
        soundCloud
        beatport
        residentAdvisor
      }
    }
  }
`;
