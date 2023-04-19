const express = require('express');
const communityController = require('../controllers/communityController');
const router = express.Router();

// router.get('/community', (req, res) => {
//   res.render('community');
// });

router.get('/community', communityController.getCommunityPage);

module.exports = router;
