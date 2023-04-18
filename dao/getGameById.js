const connection = require('../dbUtil/dbUtil');

async function getGameById(gameId) {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM items WHERE game_id = ?';
    connection.query(query, [gameId], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results[0]);
      }
    });
  });
}

module.exports = {
  getGameById,
};
