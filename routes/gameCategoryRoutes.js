const express = require("express");
const router = express.Router();
const itemsModel = require("../models/itemsModel");
const { getAllGamesByCategory} = require("../models/itemsModel");





router.get("/all/:category", async (req, res) => {
  try {
    const category = req.params.category;
    const games = await getAllGamesByCategory(category);
    const playerId = req.session.playerId;
    res.render("game-category-all", { games ,category,playerId});
  } catch (err) {
    res.status(500).send(err.message);
  }
});


module.exports = router;
