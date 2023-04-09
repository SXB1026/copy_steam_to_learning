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
    const query = "SELECT * FROM items where id=1";
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
  

  module.exports = {
    getItems,
    getItemsCount,
    getItemsByLimitAndOffset,
  };
  
