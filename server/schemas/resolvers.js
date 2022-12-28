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
                    { $addToSet: { profiles: profile._id } }
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
                    { $addToSet: { profiles: profile._id } }
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
                    { $addToSet: { profiles: profile._id } }
                );

                return profile;
            }
            throw new AuthenticationError("You need to be logged in!");
        },
        addStatueName: async (parent, { name }, context) => {
            if (context.profile) {
                const statue = await Statue.create({
                    name,
                });

                await Profile.findOneAndUpdate(
                    { _id: context.profile._id },
                    { $addToSet: { statues: statue._id } }
                );

                return statue;
            }
            throw new AuthenticationError("You need a profile!");
        },
        addStatueBio: async (parent, { bio }, context) => {
            if (context.profile) {
                const statue = await Statue.create({
                    bio,
                });

                await Profile.findOneAndUpdate(
                    { _id: context.profile._id },
                    { $addToSet: { statues: statue._id } }
                );

                return statue;
            }
            throw new AuthenticationError("You need a profile!");
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
