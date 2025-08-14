const express = require("express");
const SavedGame = require("../models/SavedGame.js");
const authMiddleware = require("../middleware/auth.js");

const router = express.Router();

// Save a game
router.post("/save", authMiddleware, async (req, res) => {
  const { dealID, title, salePrice, normalPrice, thumb } = req.body;
  try {
    const game = new SavedGame({
      userId: req.user.id,
      dealID,
      title,
      salePrice,
      normalPrice,
      thumb,
    });
    await game.save();
    res.status(201).json({ message: "Game saved" });
  } catch (err) {
    res.status(500).json({ error: "Failed to save game" });
  }
});

// Get saved games for logged-in user
router.get("/saved", authMiddleware, async (req, res) => {
  const games = await SavedGame.find({ userId: req.user.id });
  res.json(games);
});

module.exports = router;
