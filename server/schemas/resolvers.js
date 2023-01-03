const { AuthenticationError } = require("apollo-server-express");
const { User, Profile, Statue, MiniStatue } = require("../models");
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
            if (context.user) {
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
            if (context.user) {
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
        addStatueStatueLink: async (parent, { statueId, statueLink }, context) => {
            if (context.user) {
                return Statue.findOneAndUpdate(
                    { _id: statueId },
                    {
                        $addToSet: {
                            statue: { statueLink },
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
        addStatueAccessoryHeadline: async (parent, { statueId, headline }, context) => {
            if (context.user) {
                return Statue.findOneAndUpdate(
                    { _id: statueId },
                    {
                        $push: {
                            "statue.accessories": { headline }
                        }
                    },
                    {
                        new: true,
                        runValidators: true,
                    }
                );
            }
            throw new AuthenticationError("You need to be logged in!");
        },
        addStatueAccessoryBirthday: async (parent, { statueId, birthday }, context) => {
            if (context.user) {
                return Statue.findOneAndUpdate(
                    { _id: statueId },
                    {
                        $push: {
                            "statue.accessories": { birthday }
                        }
                    },
                    {
                        new: true,
                        runValidators: true,
                    }
                );
            }
            throw new AuthenticationError("You need to be logged in!");
        },
        addStatueAccessoryLocation: async (parent, { statueId, location }, context) => {
            if (context.user) {
                return Statue.findOneAndUpdate(
                    { _id: statueId },
                    {
                        $push: {
                            "statue.accessories": { location }
                        }
                    },
                    {
                        new: true,
                        runValidators: true,
                    }
                );
            }
            throw new AuthenticationError("You need to be logged in!");
        },
        addStatueAccessoryCompany: async (parent, { statueId, company }, context) => {
            if (context.user) {
                return Statue.findOneAndUpdate(
                    { _id: statueId },
                    {
                        $push: {
                            "statue.accessories": { company }
                        }
                    },
                    {
                        new: true,
                        runValidators: true,
                    }
                );
            }
            throw new AuthenticationError("You need to be logged in!");
        },
        addStatueAccessoryRelationship: async (parent, { statueId, relationship }, context) => {
            if (context.user) {
                return Statue.findOneAndUpdate(
                    { _id: statueId },
                    {
                        $push: {
                            "statue.accessories": { relationship }
                        }
                    },
                    {
                        new: true,
                        runValidators: true,
                    }
                );
            }
            throw new AuthenticationError("You need to be logged in!");
        },
        addStatueSocialLinkLink: async (parent, { statueId, link }, context) => {
            if (context.user) {
                return Statue.findOneAndUpdate(
                    { _id: statueId },
                    {
                        $push: {
                            "statue.socialLinks": { link }
                        }
                    },
                    {
                        new: true,
                        runValidators: true,
                    }
                );
            }
            throw new AuthenticationError("You need to be logged in!");
        },
        addStatueConnectionAvatar: async (parent, { statueId, avatar }, context) => {
            if (context.user) {
                return Statue.findOneAndUpdate(
                    { _id: statueId },
                    {
                        $push: {
                            "statue.connections": { avatar }
                        }
                    },
                    {
                        new: true,
                        runValidators: true,
                    }
                );
            }
            throw new AuthenticationError("You need to be logged in!");
        },
        addStatueConnectionName: async (parent, { statueId, name }, context) => {
            if (context.user) {
                return Statue.findOneAndUpdate(
                    { _id: statueId },
                    {
                        $push: {
                            "statue.connections": { name }
                        }
                    },
                    {
                        new: true,
                        runValidators: true,
                    }
                );
            }
            throw new AuthenticationError("You need to be logged in!");
        },
        addStatueConnectionSocialLink: async (parent, { statueId, socialLink }, context) => {
            if (context.user) {
                return Statue.findOneAndUpdate(
                    { _id: statueId },
                    {
                        $push: {
                            "statue.connections": { socialLink }
                        }
                    },
                    {
                        new: true,
                        runValidators: true,
                    }
                );
            }
            throw new AuthenticationError("You need to be logged in!");
        },
        addStatueCustomizationBackground: async (parent, { statueId, background }, context) => {
            if (context.user) {
                return Statue.findOneAndUpdate(
                    { _id: statueId },
                    {
                        $push: {
                            "statue.customizations": { background }
                        }
                    },
                    {
                        new: true,
                        runValidators: true,
                    }
                );
            }
            throw new AuthenticationError("You need to be logged in!");
        },
        addStatueCustomizationFont: async (parent, { statueId, font }, context) => {
            if (context.user) {
                return Statue.findOneAndUpdate(
                    { _id: statueId },
                    {
                        $push: {
                            "statue.customizations": { font }
                        }
                    },
                    {
                        new: true,
                        runValidators: true,
                    }
                );
            }
            throw new AuthenticationError("You need to be logged in!");
        },
        addStatueCustomizationPrimaryColor: async (parent, { statueId, primaryColor }, context) => {
            if (context.user) {
                return Statue.findOneAndUpdate(
                    { _id: statueId },
                    {
                        $push: {
                            "statue.customizations": { primaryColor }
                        }
                    },
                    {
                        new: true,
                        runValidators: true,
                    }
                );
            }
            throw new AuthenticationError("You need to be logged in!");
        },
        addStatueCustomizationSecondaryColor: async (parent, { statueId, secondaryColor }, context) => {
            if (context.user) {
                return Statue.findOneAndUpdate(
                    { _id: statueId },
                    {
                        $push: {
                            "statue.customizations": { secondaryColor }
                        }
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
        addMiniStatueName: async (parent, { name }) => {
            const miniStatue = await MiniStatue.create({ name });
            return miniStatue;
        },
    },
};

module.exports = resolvers;
