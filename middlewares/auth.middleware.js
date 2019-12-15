var db = require('../db');

module.exports.requireAuth = function(req, res, next) {
  // Nếu đã có cookie trước rồi thì cho qua
  // Cooki bây giờ là signIn Cookie
  // console.log(req.cookies, req.signedCookies);
  
  if (!req.signedCookies.userId) {
    res.redirect('/auth/login');
    return;
  }
  // Kiểm tra xem user có trong Db hay không, có mới cho qua
  var user = db.get('users').find({ 
    id: req.signedCookies.userId}).value();

  if (!user) {
    res.redirect('/auth/login')
  }
  // Gửi người dùng vào Middleware để sử dụng cho view
  // Chỉ tồn tại ở vòng đời Middleware này thôi
  res.locals.user = user;
  next();
}