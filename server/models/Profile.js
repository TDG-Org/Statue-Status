const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const profileSchema = new Schema({
    name: {
        type: String
    },
    bio: {
        type: String,
    },
    profilePicture: {
        type: String,
    },
});

const Profile = model("Profile", profileSchema);

module.exports = Profile;
