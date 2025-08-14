const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth.js");
const gameRoutes = require("./routes/games.js");

const app = express();
const PORT = 5000;

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/games", gameRoutes);

mongoose
  .connect("mongodb://127.0.0.1:27017/gamefinder", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    );
  });
