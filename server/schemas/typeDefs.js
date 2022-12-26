const { gql } = require("apollo-server-express");

const typeDefs = gql`

  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    profile: Profile!
  }

  type Profile {
    _id: ID
    name: String!
    bio: String!
    avatar: String!
    profileAuthor: String!
  }

  type Statue {
  _id: ID
  name: String!
  bio: String!
  accessories: [Accessories]!
  socialLinks: [SocialLinks]!
  connections: [Connections]!
  customBackground: [customBackground]!
  statueLink: [statueLink]!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    user(userID: ID!): User
    profiles(username: String!): Profile
    profile(profileId: ID!): Profile
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    editProfile(name: String!, bio: String!, avatar: String!): Profile
    removeProfile(profileId: ID!): Profile
  }
`;

module.exports = typeDefs;
