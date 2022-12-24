const db = require("../config/connection");
const { User } = require("../models");
const userSeeds = require("./userSeeds.json");

db.once("open", async () => {
    try {
        await User.deleteMany({});

        await User.create(userSeeds);

    } catch (erorr) {
        console.error(error);
        process.exit(1);
    }

    console.log("all done!");
    process.exit(0);
});
