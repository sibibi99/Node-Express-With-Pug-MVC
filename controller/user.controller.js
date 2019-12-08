var db = require('../db');
var shortid = require('shortid');

module.exports.index = function(req, res) {
  res.render('users/index',{
    users: db.get('users').value()
  })
};

module.exports.search = function(req, res){
  var q = req.query.q;
  var matchedUsers = db.get('users').value().filter(function(user) {
    return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
  });
  res.render('users/index', {
    users: matchedUsers
  })  
}

module.exports.create =  function(req, res){
  res.render('users/create')
}

module.exports.id = function(req,res) {
  var id = req.params.id;

  var user = db.get('users').find({id: id}).value()
  res.render('users/view', {
    user: user
  })
}

module.exports.post_create = function(req, res){
  req.body.id = shortid.generate();
  var errors = [];
  // Valida Kiểm tra nếu không có Name và Phone
  if(!req.body.name) {
    errors.push('Name is required.')
  }
  if(!req.body.phone) {
    errors.push('Phone is required.')
  }
  // Nếu mảng errors có lỗi
  if(errors.length) {
    res.render('users/create', {
      errors: errors,
      // Lấy biến mà người dùng đã nhập lên
      values: req.body
    })
    return;
  }
  db.get('users').push(req.body).write();
  res.redirect('/users')
}