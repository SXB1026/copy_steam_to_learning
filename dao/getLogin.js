const connection = require('../dbUtil/dbUtil');

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
  registerUser,
  getPlayerByAccountNumber,
};
