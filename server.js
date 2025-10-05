const mongoose = require("mongoose");
const app = require("./app");
require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Backend is running 🚀 on Render");
});

// Use Render's PORT
const PORT = process.env.PORT || 5000;

// connect to mongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("connected to mongoDB", PORT);

    // Listen on a port for incoming requests
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`server listening on port ${PORT}`);
    });
  })
  .catch((err) => console.error("could not connect to mongoDB", err));
