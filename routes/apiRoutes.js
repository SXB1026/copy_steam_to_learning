const express = require("express");
const {
  getGameCategories,
  getGamesByCategory,
} = require("../models/itemsModel");
const itemsModel = require('../models/itemsModel');

const router = express.Router();

router.get("/game-categories", async (req, res) => {
  try {
    const categories = await getGameCategories();
    console.log("--");
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

router.post('/logout', (req, res) => {
  // 在这里执行退出登录操作，例如销毁会话或删除cookie
  req.session.destroy();

  // 发送响应表示成功退出登录
  res.sendStatus(200);
});



router.post('/login_register', async (req, res) => {
  console.log(1);
  const { player_account_number, player_account_password, action } = req.body;

  if (action === 'register') {
    const existingPlayer = await itemsModel.getPlayerByAccountNumber(player_account_number);
    if (existingPlayer) {
      return res.status(400).json({ message: '此账号已经被占用' });
    }
    await itemsModel.registerUser(player_account_number, player_account_password);
    res.json({ message: '注册成功' });
  } else if (action === 'login') {
    const player = await itemsModel.getPlayerByAccountNumber(player_account_number);
    if (!player) {
      return res.status(400).json({ message: '账号不存在' });
    }
    if (player.player_account_password !== player_account_password) {
      return res.status(400).json({ message: '密码错误' });
    }
    req.session.playerId = player.player_id;

    res.json({ status: 'success', message: '登录成功' });
  } else {
    res.status(400).json({ message: '无效的操作' });
  }
});



module.exports = router;
