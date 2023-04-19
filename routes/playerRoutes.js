const express = require('express');
const router = express.Router();
const getPlayer = require('../dao/getPlayerById');

const gameService = require('../services/gameService');


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

router.get('/storeroom', async (req, res) => {
  const playerId = req.session.playerId;
  const loggedIn = playerId !== 0;
  let games = [];

  if (loggedIn) {
    games = await gameService.getGamesByPlayerId(playerId);
  }

  res.render('storeroom', { loggedIn, games });
});

module.exports = router;
