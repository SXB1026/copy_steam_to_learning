const connection = require('../dbUtil/dbUtil');

async function getGamePhotos(gameId, limit = 5) {
  return new Promise((resolve, reject) => {
    const photo_query = 'SELECT * FROM game_id_photo WHERE game_id = ? LIMIT ?';
    connection.query(photo_query, [gameId, limit], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

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
  getGamePhotos,
  getGameById
};
