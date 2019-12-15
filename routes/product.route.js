// Định nghĩa router
var express = require('express');
var router = express.Router();
// Require Controller
var controller = require('../controller/product.controller');
// Đưa route từ index sang
router.get('/', controller.index)