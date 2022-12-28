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
    accessories: Accessory!
    socialLinks: [SocialLink]!
    connections: [Connection]!
    customizations: Customization!
    statueLink: String!
  }

  type Accessory {
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

  type Connection {
    _id: ID
    avatar: String!
    name: String!
    socialLink: String!
  }

  type Customization {
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
    addHeadline(headline: String): Accessory
    addBirthday(birthday: String): Accessory
    addLocation(location: String): Accessory
    addCompany(company: String): Accessory
    addRelationship(relationship: String): Accessory
    addSocialLink(link: String): SocialLink
    addConnectionAvatar(avatar: String): Connection
    addConnectionName(name: String): Connection
    addConnectionSocialLink(socialLink: String): Connection
  }
`;

module.exports = typeDefs;
