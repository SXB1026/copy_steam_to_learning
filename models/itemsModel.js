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


async function getGameTypeByGameId(game_id) {
  try {
    const [rows] = await pool.query("SELECT game_type FROM game_id_type WHERE game_id = ?", [game_id]);
    return rows[0].game_type;
  } catch (err) {
    throw err;
  }
}

// 注册用户
async function registerUser(account, password) {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO players (player_account_number, player_account_password) VALUES (?, ?)';
    connection.query(query, [account, password], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

// 登录查找账号
async function getPlayerByAccountNumber(player_account_number) {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM players WHERE player_account_number = ?';
    connection.query(query, [player_account_number], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results[0]);
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
    getGameById,
    getAllGamesByCategory,
    registerUser,
    getPlayerByAccountNumber,
  };
  
  
  

  
