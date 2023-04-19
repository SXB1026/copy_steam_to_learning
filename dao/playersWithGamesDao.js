const db = require('../dbUtil/dbUtil');

async function checkIfPlayerHasGame(playerId, gameId) {
  const sql = "SELECT * FROM players_with_games WHERE player_id = ? AND game_id = ?";
  const result = await db.query(sql, [playerId, gameId]);

  return result.length > 0;
}

async function addGameToPlayer(playerId, gameId) {
  const sql = "INSERT INTO players_with_games (player_id, game_id) VALUES (?, ?)";
  await db.query(sql, [playerId, gameId]);
}

module.exports = {
  checkIfPlayerHasGame,
  addGameToPlayer,
};
