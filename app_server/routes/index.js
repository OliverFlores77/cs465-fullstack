var express = require('express');
var router = express.Router();
// gets the main controller so the route can use it
const ctrlMain = require('../controllers/main');

/* GET home page. */
// when someone goes to the home page, run the index function from main.js
router.get('/', ctrlMain.index);

module.exports = router;