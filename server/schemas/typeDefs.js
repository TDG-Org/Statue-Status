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
    addStatueName(statueId: ID!, name: String): Statue
    addStatueBio(statueId: ID!, bio: String): Statue
    addHeadline(profileId: ID!, headline: String): Profile
    addBirthday(profileId: ID!, birthday: String): Profile
    addLocation(profileId: ID!, location: String): Profile
    addCompany(profileId: ID!, company: String): Profile
    addRelationship(profileId: ID!, relationship: String): Profile
    addSocialLink(profileId: ID!, link: String): Profile
    addConnectionAvatar(profileId: ID!, avatar: String): Profile
    addConnectionName(profileId: ID!, name: String): Profile
    addConnectionSocialLink(profileId: ID!, socialLink: String): Profile
    addCustomizationBackground(profileId: ID!, background: String): Profile
    addCustomizationFont(profileId: ID!, font: String): Profile
    addCustomizationPrimaryColor(profileId: ID!, primaryColor: String): Profile
    addCustomizationSecondaryColor(profileId: ID!, secondaryColor: String): Profile
  }
`;

module.exports = typeDefs;
