const express = require("express");
const router = express.Router();
const categoryModel = require("../dao/getCategory");

router.get("/all/:category", async (req, res) => {
  try {
    const category = req.params.category;
    const games = await categoryModel.getAllGamesByCategory(category);
    const playerId = req.session.playerId;
    res.render("game-category-all", { games, category, playerId });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
