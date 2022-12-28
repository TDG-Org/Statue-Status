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
    socialLinks: [SocialLink]!
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

  type SocialLink {
    _id: ID
    link: String!
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
    profile(profileId: ID!): Profile
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
    addStatueName(name: String): Statue
    addStatueBio(bio: String): Statue
    addHeadline(headline: String): Accessories
    addBirthday(birthday: String): Accessories
    addLocation(location: String): Accessories
    addCompany(company: String): Accessories
    addRelationship(relationship: String): Accessories
    addSocialLink(link: String): SocialLink
  }
`;

module.exports = typeDefs;
