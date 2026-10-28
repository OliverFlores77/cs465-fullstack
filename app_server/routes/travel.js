var express = require('express');
var router = express.Router();
// gets the travel controller so the route can use it
var controller = require('../controllers/travel');

/* GET travel page. */
// when someone goes to /travel, run the travel function from travel.js
router.get('/', controller.travel);

module.exports = router;