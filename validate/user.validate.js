module.exports.post_create = function(req, res, next) {
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
  // Truyền biến giữa các Middleware
  res.locals.success = true;
  next();
}