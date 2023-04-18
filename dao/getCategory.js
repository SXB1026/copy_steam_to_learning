const connection = require('../dbUtil/dbUtil');


async function getGameCategories() {
  return new Promise((resolve, reject) => {
    const query = "SELECT DISTINCT game_type FROM game_id_type";
    console.log(query);
    connection.query(query, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
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
    connection.query(query, [category], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
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
    connection.query(query, [category], (err, results) => {
      if (err) {
        console.error("Error in getAllGamesByCategory query:", err);
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

module.exports = {
  getGameCategories,
  getGamesByCategory,
  getAllGamesByCategory,
};
