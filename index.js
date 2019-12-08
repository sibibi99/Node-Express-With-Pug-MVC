var express = require('express');
var bodyParser = require('body-parser')

var userRoute = require('./routes/user.route');

var port = 3000;
var app = express();

// Cấu hình Pug
app.set('view engine', 'pug');
app.set('views', './views');
// Cấu hình Body parser
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
// Static file
app.use(express.static('public'));
// app.use('/public', express.static('public'))

app.get('/', function(req, res) {
  res.render('index', {
    name: 'Node Express'
  })
})

// Import Route
app.use('/users', userRoute);

app.listen(port, function() {
  console.log('Server listen on port' + port);  
})