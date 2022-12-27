const { Schema, model } = require("mongoose");

const statueSchema = new Schema({
    name: {
        type: String
    },
    bio: {
        type: String
    },
    accessories: [
        {
            type: String
        }
    ],
    socialLinks: [
        {
            type: String
        }
    ],
    connections: [
        {
            type: String
        }
    ],
    customBackground: {
        type: String
    },
    statueLink: {
        type: String
    }
});

const Statue = model("Statue", statueSchema);

module.exports = Statue;
