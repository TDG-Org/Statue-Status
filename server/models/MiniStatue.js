const { Schema, model } = require("mongoose");

const miniStatueSchema = new Schema({
    name: {
        type: String
    },
    bios: [
        {
            bio: {
                type: String
            }
        }
    ],
    details: [
        {
            detail: {
                type: String
            }
        }
    ],
    picture: {
        type: String
    }
});

const Statue = model("Statue", miniStatueSchema);

module.exports = Statue;
