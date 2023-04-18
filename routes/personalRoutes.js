const express = require("express");
const itemsModel = require('../models/itemsModel');
const router = express.Router();

// 个人资料页面
router.get('/profile/:playerId', async (req, res) => {
    const playerId = req.params.playerId;
  
    try {
      const playerData = await itemsModel.getPlayerData(playerId); // 根据 playerId 从数据库中获取用户数据
      res.render('personal', { playerData }); // 将用户数据传递给 personal.ejs
    } catch (error) {
      console.error('无法获取用户数据:', error);
      res.status(500).send('无法获取用户数据');
    }
  });

  module.exports = router;