const express = require("express");
const router = express.Router();
const itemsModel = require("../models/itemsModel");
const { getAllGamesByCategory} = require("../models/itemsModel");

router.get("/:category", async (req, res) => {
  try {
    const category = req.params.category;
    const games = await itemsModel.getGamesByCategory(category);
    res.render("game-category", { games });
  } catch (err) {
    console.error("Error fetching games by category:", err);
    res.status(500).send("Internal Server Error");
  }
});



router.get("/all/:category", async (req, res) => {
  try {
    const category = req.params.category;
    const games = await getAllGamesByCategory(category);
    res.render("game-category-all", { games });
  } catch (err) {
    res.status(500).send(err.message);
  }
});


module.exports = router;
