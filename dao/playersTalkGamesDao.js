// dao/playersTalkGamesDao.js
const db = require("../dbUtil/dbUtil");

async function addComment(playerId, gameId, talk) {
  const sql = `INSERT INTO players_talk_games (player_id, game_id, the_talk) VALUES (?, ?, ?)`;
  const result = await db.query(sql, [playerId, gameId, talk]);
  return result;
}


async function getCommentsByGameId(gameId) {
    const sql = `SELECT * FROM players_talk_games WHERE game_id = ?`;
    const result = await db.query(sql, [gameId]);
    return result;
  }
  
  module.exports = {
    addComment,
    getCommentsByGameId,
  };
  
