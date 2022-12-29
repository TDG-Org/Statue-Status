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
    addStatueName(profileId: ID!, name: String): Profile
    addStatueBio(profileId: ID!, bio: String): Profile
    addHeadline(profileId: ID!, headline: String): Profile
    addBirthday(profileId: ID!, birthday: String): Profile
    addLocation(profileId: ID!, location: String): Profile
    addCompany(profileId: ID!, company: String): Profile
    addRelationship(profileId: ID!, relationship: String): Profile
    addSocialLink(link: String): SocialLink
    addConnectionAvatar(avatar: String): Connection
    addConnectionName(name: String): Connection
    addConnectionSocialLink(socialLink: String): Connection
    addCustomizationBackground(background: String): Customization
    addCustomizationFont(font: String): Customization
    addCustomizationPrimaryColor(primaryColor: String): Customization
    addCustomizationSecondaryColor(secondaryColor: String): Customization
  }
`;

module.exports = typeDefs;
