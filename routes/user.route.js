// Định nghĩa router
var express = require('express');
var router = express.Router();
// Require Controller
var controller = require('../controller/user.controller');
// Require Validate
var validate = require('../validate/user.validate')

// Đưa route từ index sang
router.get('/', controller.index)
// Test Cookie
router.get('/cookie', function(req, res, next) {
  res.cookie('user-id', 12345);
  res.send('Cookie Created!');
})

router.get('/search', controller.search)
router.get('/create', controller.create)
// Get User ID Dynamic Routing
router.get('/:id', controller.id)
// POST create user + Dùng middleware để validate
router.post('/create', validate.post_create, controller.post_create)

module.exports = router;