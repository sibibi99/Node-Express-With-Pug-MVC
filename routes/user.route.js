// Định nghĩa router
var express = require('express');
var router = express.Router();
// Require Controller
var controller = require('../controller/user.controller');

// Đưa route từ index sang
router.get('/', controller.index)

router.get('/search', controller.search)

router.get('/create', controller.create)
// Get User ID Dynamic Routing
router.get('/:id', controller.id)
// POST create user
router.post('/create', controller.post_create)

module.exports = router;