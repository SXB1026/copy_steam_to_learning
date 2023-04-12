const express = require("express");
const itemsModel = require("../models/itemsModel");


const router = express.Router();
const { getItems, getItemsCount, getItemsByLimitAndOffset } = require("../models/itemsModel");


  
router.get("/", async (req, res) => {
  try {
    const items = await getItems();
    const playerId = req.session.playerId; // 获取playerId
    res.render("index", { items: items, playerId: playerId }); // 将playerId传递给模板
  } catch (err) {
    console.error("Error querying: " + err.stack);
    res.status(500).send("Error querying the database");
  }
});

  
  router.get("/count", async (req, res) => {
    try {
      const count = await getItemsCount();
      res.json({ count });
    } catch (err) {
      console.error("Error querying: " + err.stack);
      res.status(500).send("Error querying the database");
    }
  });
  //通过点击切换按钮来用不同的语句来查询不同的语句内容
  router.get("/data/:index/:limit", async (req, res) => {
    const index = parseInt(req.params.index, 10);
    const limit = parseInt(req.params.limit, 10);
  
    try {
      const items = await getItemsByLimitAndOffset(limit, index);
      res.json(items);
    } catch (error) {
      res.status(500).send("Error fetching data");
    }
  });
  //进入详情页的路由
  router.get('/details/:gameId', async (req, res) => {
    const gameId = req.params.gameId;
    try {
      const game = await itemsModel.getGameById(gameId);
      res.render('details', { game });
    } catch (err) {
      console.error('Error fetching game details:', err);
      res.status(500).send('Internal Server Error');
    }
  });

  router.get('/login_register', (req, res) => {
    res.render('login_register');
  });
  

  module.exports = router;

