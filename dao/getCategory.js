const db = require('../dbUtil/dbUtil');

async function getGameCategories() {
  return new Promise((resolve, reject) => {
    const query = "SELECT DISTINCT game_type FROM game_id_type";
    console.log(query);
    db.query(query)
      .then(results => {
        resolve(results);
      })
      .catch(err => {
        reject(err);
      });
  });
}

async function getGamesByCategory(category) {
  return new Promise((resolve, reject) => {
    const query = `
      SELECT items.* 
      FROM items 
      INNER JOIN game_id_type ON items.game_id = game_id_type.game_id
      WHERE game_id_type.game_type = ?
      LIMIT 10
    `;
    db.query(query, [category])
      .then(results => {
        resolve(results);
      })
      .catch(err => {
        reject(err);
      });
  });
}

async function getAllGamesByCategory(category) {
  return new Promise((resolve, reject) => {
    const query = `
      SELECT items.*, game_id_type.game_type
      FROM items
      INNER JOIN game_id_type ON items.game_id = game_id_type.game_id
      WHERE game_id_type.game_type = ?
    `;
    db.query(query, [category])
      .then(results => {
        resolve(results);
      })
      .catch(err => {
        console.error("Error in getAllGamesByCategory query:", err);
        reject(err);
      });
  });
}

module.exports = {
  getGameCategories,
  getGamesByCategory,
  getAllGamesByCategory,
};
