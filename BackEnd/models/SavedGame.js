const mongoose = require("mongoose");

//GAME DATA INFRASTRUCTURE

const savedGameSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    dealID: { type: String, required: true },
    title: { type: String },
    salePrice: { type: String },
    normalPrice: { type: String },
    thumb: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("SavedGame", savedGameSchema);
