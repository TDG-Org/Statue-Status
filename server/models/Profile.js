const { Schema, model } = require("mongoose");

const profileSchema = new Schema({
    name: {
        type: String
    },
    bio: {
        type: String,
    },
    avatar: {
        type: String,
    },
    profileAuthor: {
        type: String,
        required: true,
        trim: true,
    },
    statue:
    {
        type: Schema.Types.ObjectId,
        ref: "Statue",
    },
});

const Profile = model("Profile", profileSchema);

module.exports = Profile;
