const gameService = require('../services/gameService');

exports.getStoreroom = async (req, res) => {
    if (!req.session.playerId || req.session.playerId === 0) {
        res.locals.playerId = req.session.playerId;
      res.redirect('/nothing');
    } else {
      const playerId = req.session.playerId;
      const games = await gameService.getGamesByPlayerId(playerId);
      res.render('storeroom', { loggedIn: true, games: games ,playerId:playerId});
    }
  };

