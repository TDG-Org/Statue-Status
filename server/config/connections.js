const mongoose = require("mongoose");

// The connection string is a secret: it must come from the environment.
// Copy `.env.example` to `server/.env` and set MONGODB_URI there.
const uri = process.env.MONGODB_URI;

if (!uri) {
    throw new Error(
        "MONGODB_URI is not set. Copy .env.example to server/.env and set MONGODB_URI before starting the server."
    );
}

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = mongoose.connection;
