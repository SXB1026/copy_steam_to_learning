// dao/gamesDao.js

const db = require('../dbUtil/dbUtil');

async function getGamesByPlayerId(playerId) {
  const sql = `SELECT items.* FROM items
               INNER JOIN players_with_games
               ON items.game_id = players_with_games.game_id
               WHERE players_with_games.player_id = ?`;
  const result = await db.query(sql, [playerId]);
  return result;
}

// 导出其他函数...
module.exports = {
  getGamesByPlayerId,
  // ...
};
