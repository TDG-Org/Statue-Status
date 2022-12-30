const { AuthenticationError } = require("apollo-server-express");
const { User, Profile, Statue } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
    Query: {
        users: async () => {
            return User.find();
        },
        user: async (parent, { username }) => {
            return User.findOne({ username });
        },
        profiles: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Profile.find(params);
        },
        profile: async (parent, { profileId }) => {
            return Profile.findOne({ _id: profileId });
        },
        me: async (parent, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id });
            }
            throw new AuthenticationError("You need to be logged in!");
        },
    },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError("No user found with this email address");
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError("Incorrect credentials");
            }

            const token = signToken(user);

            return { token, user };
        },
        editProfileName: async (parent, { name }, context) => {
            if (context.user) {
                const profile = await Profile.create({
                    name,
                    profileAuthor: context.user.username,
                });

                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { profile: profile._id } }
                );

                return profile;
            }
            throw new AuthenticationError("You need to be logged in!");
        },
        editProfileBio: async (parent, { bio }, context) => {
            if (context.user) {
                const profile = await Profile.create({
                    bio,
                    profileAuthor: context.user.username,
                });

                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { profile: profile._id } }
                );

                return profile;
            }
            throw new AuthenticationError("You need to be logged in!");
        },
        editProfileAvatar: async (parent, { avatar }, context) => {
            if (context.user) {
                const profile = await Profile.create({
                    avatar,
                    profileAuthor: context.user.username,
                });

                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { profile: profile._id } }
                );

                return profile;
            }
            throw new AuthenticationError("You need to be logged in!");
        },
        addStatueName: async (parent, { statueId, name }, context) => {
            if (context.profile) {
                return Statue.findOneAndUpdate(
                    { _id: statueId },
                    {
                        $addToSet: {
                            statue: { name },
                        },
                    },
                    {
                        new: true,
                        runValidators: true,
                    }
                );
            }
            throw new AuthenticationError("You need to be logged in!");
        },
        addStatueBio: async (parent, { statueId, bio }, context) => {
            if (context.profile) {
                return Statue.findOneAndUpdate(
                    { _id: statueId },
                    {
                        $addToSet: {
                            statue: { bio },
                        },
                    },
                    {
                        new: true,
                        runValidators: true,
                    }
                );
            }
            throw new AuthenticationError("You need to be logged in!");
        },
        addHeadline: async (parent, { profileId, headline }, context) => {
            if (context.user) {
                return Profile.findOneAndUpdate(
                    { _id: profileId },
                    {
                        $addToSet: {
                            accessories: { headline },
                        },
                    },
                    {
                        new: true,
                        runValidators: true,
                    }
                );
            }
            throw new AuthenticationError("You need to be logged in!");
        },
        addBirthday: async (parent, { profileId, birthday }, context) => {
            if (context.user) {
                return Profile.findOneAndUpdate(
                    { _id: profileId },
                    {
                        $addToSet: {
                            accessories: { birthday },
                        },
                    },
                    {
                        new: true,
                        runValidators: true,
                    }
                );
            }
            throw new AuthenticationError("You need to be logged in!");
        },
        addLocation: async (parent, { profileId, location }, context) => {
            if (context.user) {
                return Profile.findOneAndUpdate(
                    { _id: profileId },
                    {
                        $addToSet: {
                            accessories: { location },
                        },
                    },
                    {
                        new: true,
                        runValidators: true,
                    }
                );
            }
            throw new AuthenticationError("You need to be logged in!");
        },
        addCompany: async (parent, { profileId, company }, context) => {
            if (context.user) {
                return Profile.findOneAndUpdate(
                    { _id: profileId },
                    {
                        $addToSet: {
                            accessories: { company },
                        },
                    },
                    {
                        new: true,
                        runValidators: true,
                    }
                );
            }
            throw new AuthenticationError("You need to be logged in!");
        },
        addRelationship: async (parent, { profileId, relationship }, context) => {
            if (context.user) {
                return Profile.findOneAndUpdate(
                    { _id: profileId },
                    {
                        $addToSet: {
                            accessories: { relationship },
                        },
                    },
                    {
                        new: true,
                        runValidators: true,
                    }
                );
            }
            throw new AuthenticationError("You need to be logged in!");
        },
        addSocialLink: async (parent, { profileId, link }, context) => {
            if (context.user) {
                return Profile.findOneAndUpdate(
                    { _id: profileId },
                    {
                        $addToSet: {
                            socialLinks: { link },
                        },
                    },
                    {
                        new: true,
                        runValidators: true,
                    }
                );
            }
            throw new AuthenticationError("You need to be logged in!");
        },
        addConnectionAvatar: async (parent, { profileId, avatar }, context) => {
            if (context.user) {
                return Profile.findOneAndUpdate(
                    { _id: profileId },
                    {
                        $addToSet: {
                            connections: { avatar },
                        },
                    },
                    {
                        new: true,
                        runValidators: true,
                    }
                );
            }
            throw new AuthenticationError("You need to be logged in!");
        },
        addConnectionName: async (parent, { profileId, name }, context) => {
            if (context.user) {
                return Profile.findOneAndUpdate(
                    { _id: profileId },
                    {
                        $addToSet: {
                            connections: { name },
                        },
                    },
                    {
                        new: true,
                        runValidators: true,
                    }
                );
            }
            throw new AuthenticationError("You need to be logged in!");
        },
        addConnectionSocialLink: async (parent, { profileId, socialLink }, context) => {
            if (context.user) {
                return Profile.findOneAndUpdate(
                    { _id: profileId },
                    {
                        $addToSet: {
                            connections: { socialLink },
                        },
                    },
                    {
                        new: true,
                        runValidators: true,
                    }
                );
            }
            throw new AuthenticationError("You need to be logged in!");
        },
        addCustomizationBackground: async (parent, { profileId, background }, context) => {
            if (context.user) {
                return Profile.findOneAndUpdate(
                    { _id: profileId },
                    {
                        $addToSet: {
                            customizations: { background },
                        },
                    },
                    {
                        new: true,
                        runValidators: true,
                    }
                );
            }
            throw new AuthenticationError("You need to be logged in!");
        },
        addCustomizationFont: async (parent, { profileId, font }, context) => {
            if (context.user) {
                return Profile.findOneAndUpdate(
                    { _id: profileId },
                    {
                        $addToSet: {
                            customizations: { font },
                        },
                    },
                    {
                        new: true,
                        runValidators: true,
                    }
                );
            }
            throw new AuthenticationError("You need to be logged in!");
        },
        addCustomizationPrimaryColor: async (parent, { profileId, primaryColor }, context) => {
            if (context.user) {
                return Profile.findOneAndUpdate(
                    { _id: profileId },
                    {
                        $addToSet: {
                            customizations: { primaryColor },
                        },
                    },
                    {
                        new: true,
                        runValidators: true,
                    }
                );
            }
            throw new AuthenticationError("You need to be logged in!");
        },
        addCustomizationSecondaryColor: async (parent, { profileId, secondaryColor }, context) => {
            if (context.user) {
                return Profile.findOneAndUpdate(
                    { _id: profileId },
                    {
                        $addToSet: {
                            customizations: { secondaryColor },
                        },
                    },
                    {
                        new: true,
                        runValidators: true,
                    }
                );
            }
            throw new AuthenticationError("You need to be logged in!");
        },
        removeProfile: async (parent, { profileId }, context) => {
            if (context.user) {
                const profile = await Profile.findOneAndDelete({
                    _id: profileId,
                    profileAuthor: context.user.username,
                });

                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { profiles: profile._id } }
                );

                return profile;
            }
            throw new AuthenticationError("You need to be logged in!");
        },
    },
};

module.exports = resolvers;
