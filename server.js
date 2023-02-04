const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bootcampRouter = require("./routers/bootcamps");
// LOAD env vars
dotenv.config({ path: "./config/.env" });
const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors());

// Mount routers
app.use("/api/v1/bootcamps", bootcampRouter);

app.listen(PORT, "localhost", () => {
    console.log(`Server running on port: ${PORT}`);
});
