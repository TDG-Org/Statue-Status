const { gql } = require("apollo-server-express");

const typeDefs = gql`

  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    profiles: [Profile]!
  }

  type Profile {
    _id: ID
    name: String!
    bio: String
    profilePicture: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    profiles(username: String): [Profile]
    profile(profileId: ID!): Profile
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addProfile(name: String!, bio: String!, profilePicture: String!): Profile
  }
`;

module.exports = typeDefs;
