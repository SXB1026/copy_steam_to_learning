const db = require('../dbUtil/dbUtil');

async function getGameById(gameId) {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM items WHERE game_id = ?';
    db.query(query, [gameId])
      .then(results => {
        resolve(results[0]);
      })
      .catch(err => {
        reject(err);
      });
  });
}

module.exports = {
  getGameById,
};
