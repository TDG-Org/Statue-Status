const { Schema, model } = require("mongoose");

const statueSchema = new Schema({
    name: {
        type: String
    },
    bio: {
        type: String
    },
    accessories: {
        headline: {
            type: String
        },
        birthday: {
            type: String
        },
        location: {
            type: Stirng
        },
        company: {
            type: String
        },
        relationship: {
            type: String
        }
    },
    socialLinks: [
        {
            links: {
                type: String
            }
        }
    ],
    connections: [
        {
            links: {
                type: String
            }
        }
    ],
    customizations: {
        background: {
            type: String
        },
        font: {
            type: String
        },
        primaryColor: {
            type: String
        },
        secondaryColor: {
            type: String
        }
    },
    statueLink: {
        type: String
    }
});

const Statue = model("Statue", statueSchema);

module.exports = Statue;
