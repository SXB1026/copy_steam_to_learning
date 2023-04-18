const express = require("express");
const itemsModel = require('../dao/getItems');
const router = express.Router();

router.get('/profile/:playerId', async (req, res) => {
  const playerId = req.params.playerId;

  try {
    const playerData = await itemsModel.getPlayerData(playerId);
    res.render('personal', { playerData });
  } catch (error) {
    console.error('无法获取用户数据:', error);
    res.status(500).send('无法获取用户数据');
  }
});

module.exports = router;
