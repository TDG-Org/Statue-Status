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
    statueLink: String!
    accessories: Accessory!
    socialLinks: [SocialLink]!
    connections: [Connection]!
    customizations: Customization!
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

  type MiniStatue {
    _id: ID
    name: String!
    bios: [Bio]!
    details: [Detail]!
    picture: String!
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
    addStatueStatueLink(statueId: ID!, statueLink: String): Statue
    addStatueAccessoryHeadline(statueId: ID!, headline: String): Statue
    addStatueAccessoryBirthday(statueId: ID!, birthday: String): Statue
    addStatueAccessoryLocation(statueId: ID!, location: String): Statue
    addStatueAccessoryCompany(statueId: ID!, company: String): Statue
    addStatueAccessoryRelationship(statueId: ID!, relationship: String): Statue
    addStatueSocialLinkLink(statueId: ID!, link: String): Statue
    addStatueConnectionAvatar(statueId: ID!, avatar: String): Statue
    addStatueConnectionName(statueId: ID!, name: String): Statue
    addStatueConnectionSocialLink(statueId: ID!, socialLink: String): Statue
    addStatueCustomizationBackground(statueId: ID!, background: String): Statue
    addStatueCustomizationFont(statueId: ID!, font: String): Statue
    addStatueCustomizationPrimaryColor(statueId: ID!, primaryColor: String): Statue
    addStatueCustomizationSecondaryColor(statueId: ID!, secondaryColor: String): Statue
  }
`;

module.exports = typeDefs;
