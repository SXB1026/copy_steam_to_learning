const db = require('../dbUtil/dbUtil');

async function getCommunityData() {
  return new Promise((resolve, reject) => {
    const query = `
      SELECT  ptg.player_id, ptg.game_id, ptg.the_talk, p.player_name, i.game_name
      FROM players_talk_games ptg
      JOIN players p ON ptg.player_id = p.player_id
      JOIN items i ON ptg.game_id = i.game_id
    `;
    db.query(query)
      .then(results => {
        resolve(results);
      })
      .catch(err => {
        reject(err);
      });
  });
}

module.exports = {
  getCommunityData,
};
