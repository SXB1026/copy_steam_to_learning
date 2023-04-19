const communityDao = require('../dao/communityDao');

exports.getCommunityPage = async (req, res) => {
  try {
    const communityData = await communityDao.getCommunityData();
    console.log(communityDao);
    res.render('community', { all_talks: communityData,playerId: req.session.playerId});
  } catch (error) {
    console.error('Error fetching community data:', error);
    res.status(500).send('Internal server error');
  }
};
