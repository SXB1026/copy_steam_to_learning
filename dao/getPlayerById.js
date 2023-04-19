  const db = require('../dbUtil/dbUtil');

  async function getPlayerById(playerId) {
    return new Promise((resolve, reject) => {
      const sql = `
        SELECT
          player_name,
          player_money,
          player_introduce,
          player_photo,
          player_game_time
        FROM
          players
        WHERE
          player_id = ?
      `;
      db.query(sql, [playerId])
        .then(results => {
          resolve(results[0]);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  module.exports = {
    getPlayerById,
  };
