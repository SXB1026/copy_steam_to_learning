const express = require("express");
const itemsModel = require("../dao/getItems");
const detailModel = require("../dao/getDetail");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const items = await itemsModel.getItems();
    const playerId = req.session.playerId;
    res.render("index", { items: items, playerId: playerId });
  } catch (err) {
    console.error("Error querying: " + err.stack);
    res.status(500).send("Error querying the database");
  }
});

router.get('/nothing', (req, res) => {
  console.log(req.session.playerId);
  res.render('nothing',{ playerId: req.session.playerId });
});


router.get("/count", async (req, res) =>{
  try {
    const count = await itemsModel.getItemsCount();
    res.json({ count });
  } catch (err) {
    console.error("Error querying: " + err.stack);
    res.status(500).send("Error querying the database");
  }
});

router.get("/data/:index/:limit", async (req, res) => {
  const index = parseInt(req.params.index, 10);
  const limit = parseInt(req.params.limit, 10);

  try {
    const items = await itemsModel.getItemsByLimitAndOffset(limit, index);
    res.json(items);
  } catch (error) {
    res.status(500).send("Error fetching data");
  }
});

router.get('/details/:gameId', async (req, res) => {
  const gameId = req.params.gameId;
  const playerId = req.session.playerId;
  try {
    const game = await detailModel.getGameById(gameId);
    const photos = await detailModel.getGamePhotos(gameId);
    res.render('details', { game, photos, playerId: playerId });
  } catch (err) {
    console.error('Error fetching game details:', err);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/login_register', (req, res) => {
  res.render('login_register');
});

module.exports = router;

