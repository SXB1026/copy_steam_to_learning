const dbUtil = require("./dbUtil/dbUtil");

async function testQuery(playerId) {
  const sql = `
    SELECT
      player_name,
      player_money,
      player_introduce,
      player_photo,
      player_game_time
    FROM
      players
    WHERE
      player_id = ?
  `;

  try {
    const result = await dbUtil.query(sql, [playerId]);
    const rows = result;
    console.log("查询结果:", rows);
  } catch (error) {
    console.error("数据库查询异常:", error);
  }
}

testQuery(1); // 测试 player_id = 1 的查询
