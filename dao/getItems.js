const connection = require('../dbUtil/dbUtil');

async function getItems() {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM items";
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
