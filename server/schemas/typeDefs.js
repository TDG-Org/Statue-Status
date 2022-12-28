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
    statue: Statue!
  }

  type Statue {
    _id: ID
    name: String!
    bio: String!
    accessories: Accessories!
    socialLinks: [SocialLinks]!
    connections: [Connections]!
    customizations: Customizations!
    statueLink: String!
  }

  type Accessories {
    _id: ID
    headline: String!
    birthday: String!
    location: String!
    company: String!
    relationship: String!
  }

  type SocialLinks {
    _id: ID
    links: String!
  }

  type Connections {
    _id: ID
    avatar: String!
    name: String!
    socialLink: String!
  }

  type Customizations {
    _id: ID
    background: String!
    font: String!
    primaryColor: String!
    secondaryColor: String!
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
    statues(username: String!): Statue
    statue(statueId: ID!): Statue
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    editProfileName(name: String!): Profile
    editProfileBio(bio: String!): Profile
    editProfileAvatar(avatar: String!): Profile
    removeProfile(profileId: ID!): Profile
  }
`;

module.exports = typeDefs;
