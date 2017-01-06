var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.listen(3000, () => console.log('Server started'));

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/tinh', require('./controller/tinh.js'));
app.get('/list', require('./controller/list.js'));
app.post('/xulypheptinh', require('./controller/xulypheptinh.js'));
app.get('/listperson', require('./controller/listperson.js'));
