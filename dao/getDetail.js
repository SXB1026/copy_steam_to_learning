const db = require('../dbUtil/dbUtil');

async function getGamePhotos(gameId, limit = 5) {
  return new Promise((resolve, reject) => {
    const photo_query = 'SELECT * FROM game_id_photo WHERE game_id = ? LIMIT ?';
    db.query(photo_query, [gameId, limit])
      .then(results => {
        resolve(results);
      })
      .catch(err => {
        reject(err);
      });
  });
}

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
  getGamePhotos,
  getGameById
};
