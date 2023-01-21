import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const EDIT_PROFILE_NAME = gql`
  mutation editProfileName($name: String!) {
    editProfileName(name: $name) {
      _id
      name
    }
  }
`;

export const EDIT_PROFILE_BIO = gql`
  mutation editProfileBio($bio: String!) {
    editProfileBio(bio: $bio) {
      _id
      bio
    }
  }
`;