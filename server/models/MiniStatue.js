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

const MiniStatue = model("MiniStatue", miniStatueSchema);

module.exports = MiniStatue;
