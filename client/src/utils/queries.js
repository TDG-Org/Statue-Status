import { gql } from "@apollo/client";

export const QUERY_USER_BY_ID = gql`
  query user($userId: ID!) {
    user(userId: $userId) {
      _id
      username
      email
      profile {
        _id
      }
    }
  }
`;

export const QUERY_USERS_BY_SEARCH = gql`
  query usersBySearch($search: String!) {
    users(search: $search) {
      _id
      username
      email
      profile {
        _id
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
    }
  }
`;

export const QUERY_PROFILE = gql`
  query profile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      name
      bio
      avatar
      profileAuthor
      statue {
        _id
      }
    }
  }
`;
