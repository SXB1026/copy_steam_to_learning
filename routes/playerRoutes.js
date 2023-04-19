const express = require('express');
const router = express.Router();
const getPlayer = require('../dao/getPlayerById');

router.get('/player/:id', async (req, res) => {
  try {
    const playerId = req.params.id;
    const player = await getPlayer.getPlayerById(playerId);
    res.render('personal', { playerData:player,playerId:playerId});
    // res.json(player);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching player data' });
  }
});

module.exports = router;
