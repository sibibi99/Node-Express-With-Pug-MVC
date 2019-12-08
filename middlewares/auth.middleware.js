var db = require('../db');

module.exports.requireAuth = function(req, res, next) {
  // Nếu đã có cookie trước rồi thì cho qua
  if (!req.cookies.userId) {
    res.redirect('/auth/login');
    return;
  }
  // Kiểm tra xem user có trong Db hay không, có mới cho qua
  var user = db.get('users').find({ id: req.cookies.userId}).value();

  if (!user) {
    res.redirect('/auth/login')
  }

  next();
}