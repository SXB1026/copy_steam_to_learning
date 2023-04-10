const express = require("express");
const {
  getGameCategories,
  getGamesByCategory,
} = require("../models/itemsModel");

const router = express.Router();

router.get("/game-categories", async (req, res) => {
  try {
    const categories = await getGameCategories();
    console.log("什么是？")
    res.json(categories);
  } catch (err) {
    console.error("Error querying: " + err.stack);
    res.status(500).send("Error querying the database");
  }
});

router.get("/games", async (req, res) => {
  const category = req.query.category;

  try {
    const games = await getGamesByCategory(category);
    res.json(games);
  } catch (err) {
    console.error("Error querying: " + err.stack);
    res.status(500).send("Error querying the database");
  }
});

module.exports = router;
