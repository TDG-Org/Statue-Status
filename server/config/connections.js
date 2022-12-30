const mongoose = require("mongoose");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb+srv://Nate:statuestatus01@statuestatus.nxyv2tm.mongodb.net/?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

module.exports = mongoose.connection;