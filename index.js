require('dotenv').config()
// console.log(process.env.SESSION_SECRET);


var express = require('express');
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')

var userRoute = require('./routes/user.route');
var authRoute = require('./routes/auth.route');
var middleware = require('./middlewares/auth.middleware')
var productRoute = require('./routes/product.route')

var port = 3000;
var app = express();

// Cấu hình Pug
app.set('view engine', 'pug');
app.set('views', './views');
// Cấu hình Body parser
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
// Truyền vào chuỗi ngẫu nhiên
app.use(cookieParser(process.env.SESSION_SECRET));
// Static file
app.use(express.static('public'));
// app.use('/public', express.static('public'))

app.get('/', function(req, res) {
  res.render('index', {
    name: 'Node Express'
  })
})

// Import Route
app.use('/users', middleware.requireAuth, userRoute);
app.use('/auth', authRoute);
app.use('/products', productRoute);

app.listen(port, function() {
  console.log('Server listen on port ' + port);  
})