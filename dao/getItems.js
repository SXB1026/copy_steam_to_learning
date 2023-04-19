const db = require('../dbUtil/dbUtil');

async function getItems() {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM items";
    db.query(query)
      .then(results => {
        resolve(results);
      })
      .catch(err => {
        reject(err);
      });
  });
}

async function getItemsCount() {
  return new Promise((resolve, reject) => {
    const query = "SELECT COUNT(*) as count FROM items";
    db.query(query)
      .then(results => {
        resolve(results[0].count);
      })
      .catch(err => {
        reject(err);
      });
  });
}

async function getItemsByLimitAndOffset(limit, offset) {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM items LIMIT ? OFFSET ?";
    db.query(query, [limit, offset])
      .then(results => {
        resolve(results);
      })
      .catch(err => {
        reject(err);
      });
  });
}

module.exports = {
  getItems,
  getItemsCount,
  getItemsByLimitAndOffset,
};
