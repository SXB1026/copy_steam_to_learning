const getPlayerById = require("../dao/getPlayerById");
const gameDao = require("../dao/getGameById");
const playerDao = require("../dao/playerDao");
const playersWithGamesDao = require("../dao/playersWithGamesDao"); // 引入新的DAO模块

async function buyGame(playerId, gameId) {
  const player = await getPlayerById.getPlayerById(playerId);
  const game = await gameDao.getGameById(gameId);

  // 检查玩家是否已经拥有游戏
  const playerHasGame = await playersWithGamesDao.checkIfPlayerHasGame(playerId, gameId);

  if (playerHasGame) {
    return { success: false, message: "您已经拥有该游戏了" };
  }

  if (player.player_money >= game.game_price) {
    // 执行购买操作，这里简化为扣除玩家余额
    let remainingMoney = player.player_money - game.game_price;

    // 为玩家添加新游戏
    await playersWithGamesDao.addGameToPlayer(playerId, gameId);

    // 更新数据库中玩家余额
    await playerDao.updatePlayerMoney(playerId, remainingMoney);

    return { success: true, message:"购买成功", remainingMoney: remainingMoney };
  } else {
    return { success: false, message: "余额不足" };
  }
}

module.exports = {
  buyGame,
};
