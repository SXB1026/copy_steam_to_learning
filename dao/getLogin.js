const db = require('../dbUtil/dbUtil');

async function registerUser(account, password) {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO players (player_account_number, player_account_password) VALUES (?, ?)';
    db.query(query, [account, password])
      .then(results => {
        resolve(results);
      })
      .catch(err => {
        reject(err);
      });
  });
}

async function getPlayerByAccountNumber(player_account_number) {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM players WHERE player_account_number = ?';
    db.query(query, [player_account_number])
      .then(results => {
        resolve(results[0]);
      })
      .catch(err => {
        reject(err);
      });
  });
}

module.exports = {
  registerUser,
  getPlayerByAccountNumber,
};
