const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "the_steam",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting: " + err.stack);
    return;
  }

  console.log("Connected to MySQL as id " + connection.threadId);
});

async function getItems() {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM items ";
    connection.query(query, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

async function getItemsCount() {
    return new Promise((resolve, reject) => {
      const query = "SELECT COUNT(*) as count FROM items";
      connection.query(query, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results[0].count);
        }
      });
    });
  }
  
  async function getItemsByLimitAndOffset(limit, offset) {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM items LIMIT ? OFFSET ?";
      connection.query(query, [limit, offset], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }

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
    SELECT items.* 
    FROM items 
    INNER JOIN game_id_type ON items.game_id = game_id_type.game_id
    WHERE game_id_type.game_type = ?
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

  
  
  module.exports = {
    getItems,
    getItemsCount,
    getItemsByLimitAndOffset,
    getGameCategories,
    getGamesByCategory, // 这里导出新添加的函数
    getAllGamesByCategory,
  };
  
  
  

  
