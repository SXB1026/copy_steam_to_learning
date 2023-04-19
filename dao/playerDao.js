
const db = require('../dbUtil/dbUtil');

async function updatePlayerMoney(playerId, money) {
  try {
    const sql = "UPDATE players SET player_money = ? WHERE player_id = ?";
    console.log("Executing updatePlayerMoney query"); // 添加这个日志输出
    console.log("updatePlayerMoney query:", sql, [money, playerId]);

    const results = await db.query(sql, [money, playerId]);

    console.log("updatePlayerMoney query executed successfully"); // 添加这个日志输出
    return results;
  } catch (err) {
    console.error("Error in updatePlayerMoney query:", err); // 添加这个日志输出
    throw err;
  }
}

module.exports = {
  updatePlayerMoney,
};

  