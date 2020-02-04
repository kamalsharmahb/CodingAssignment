var express = require('express');
var router = express.Router();

var post_controller = require('../controllers/post');

// a simple test url to check that all of our files are communicating correctly.
router.get('/test', post_controller.test);

router.get('/', post_controller.post_all);

module.exports = router;
