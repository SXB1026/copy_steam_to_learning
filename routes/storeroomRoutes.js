const express = require('express');
const router = express.Router();

// router.get('/storeroom', (req, res) => {
//   res.render('storeroom');
// });


const storeroomController = require('../controllers/storeroomController');

router.get('/storeroom', storeroomController.getStoreroom);

module.exports = router;


