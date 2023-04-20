const gameService = require('../services/gameService');

exports.getStoreroom = async (req, res) => {
  const playerId = req.session.playerId;
  const games = await gameService.getGamesByPlayerId(playerId);
  console.log(games.length);
    if (!req.session.playerId || req.session.playerId === 0) {
        res.locals.playerId = req.session.playerId;
      res.redirect('/nothing');
    } else if(games.length == 0){
      console.log("您还没有游戏哦");
      res.redirect('/nothing2');
    }
    else {
      // const playerId = req.session.playerId;
      // const games = await gameService.getGamesByPlayerId(playerId);
      console.log(games);
      res.render('storeroom', { loggedIn: true, games: games ,playerId:playerId});
    }
  };

