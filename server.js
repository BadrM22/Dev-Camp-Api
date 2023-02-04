const express = require("express");
const dotenv = require("dotenv");

// LOAD env vars
dotenv.config({ path: "./config/.env" });

const app = express();

const PORT = process.env.PORT || 8080;

app.listen(PORT, "localhost", () => {
    console.log(`Server running on port: ${PORT}`);
});
