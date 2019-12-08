var db = require('../db');

module.exports.login = function(req, res) {
  res.render('auth/login')
};

module.exports.postLogin = function(req, res) {
  // Xử lý thông tin đăng nhập được gửi lên
  var email = req.body.email;
  var password = req.body.password;

  var user = db.get('users').find({email: email}).value();

  if (!user) {
    res.render('auth/login', {
      errors: [
        'Use dose not exits.'
      ],
      values: req.body
    });
    return;
  }

  if (user.password !== password) {
    res.render('auth/login', {
      errors: [
        'Wrong password.'
      ],
      values: req.body
    })
    return;
  }
  // Tạo cookie cho phiên đăng nhập
  res.cookie('userId', user.id)
  res.redirect('/users');
};
