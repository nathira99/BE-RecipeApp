const mongoose = require("mongoose");
const app = require("./app");
require("dotenv").config();

// connect to mongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("connected to mongoDB");

    // Listen on a port for incoming requests
    app.listen(3002, "localhost", () => {
      console.log("server listening on http://localhost:3002");
    });
  })
  .catch((err) => console.error("could not connect to mongoDB", err));
