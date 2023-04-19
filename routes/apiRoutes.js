const express = require("express");
const itemsModel = require("../dao/getItems");
const categoryModel = require("../dao/getCategory");
const loginModel = require("../dao/getLogin");
const detailModel = require("../dao/getDetail");
const gameService = require("../services/gameService");

const router = express.Router();

// 购买游戏的API端点
router.post("/buyGame", async (req, res) => {
  const { playerId, gameId } = req.body;
  try {
    const result = await gameService.buyGame(playerId, gameId);
    res.json(result);
  } catch (error) {
    console.log(error); 
    res.status(500).json({ message: "购买游戏失败了" });
  }
});

router.get("/game-categories", async (req, res) => {
  try {
    const categories = await categoryModel.getGameCategories();
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
    const games = await categoryModel.getGamesByCategory(category);
    res.json(games);
  } catch (err) {
    console.error("Error querying: " + err.stack);
    res.status(500).send("Error querying the database");
  }
});

router.post('/logout', (req, res) => {
  req.session.destroy();
  res.sendStatus(200);
});

router.post('/login_register', async (req, res) => {
  const { player_account_number, player_account_password, action } = req.body;

  if (action === 'register') {
    const existingPlayer = await loginModel.getPlayerByAccountNumber(player_account_number);
    if (existingPlayer) {
      return res.status(400).json({ message: '此账号已经被占用' });
    }
    await loginModel.registerUser(player_account_number, player_account_password);
    res.json({ message: '注册成功' });
  } else if (action === 'login') {
    const player = await loginModel.getPlayerByAccountNumber(player_account_number);
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
