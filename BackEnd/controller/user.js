const User = require("../models/User");
const { router } = require("../routes/auth");

// Register
async function createUser(req, res) {
  const { username, email, password } = req.body;
  try {
    const user = new User({ username, email, password });
    await user.save();
    res.status(201).json({ message: "User registered" });
  } catch (err) {
    res.status(400).json({ error: "User already exists or invalid data" });
  }
}

module.exports = {
  createUser,
};
