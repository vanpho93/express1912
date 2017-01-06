var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');
app.use(bodyParser.urlencoded({extended: false}));
app.use(require('./controller/midleware.js'));
app.listen(3000, () => console.log('Server started'));
app.set('view engine', 'ejs');
app.set('views', './views');
app.get('/tinh', require('./controller/tinh.js'));
app.get('/list', require('./controller/list.js'));
app.post('/xulypheptinh', require('./controller/xulypheptinh.js'));
app.get('/listperson', require('./controller/listperson.js'));
app.get('/upload', require('./controller/getUpload'));

var storage = multer.diskStorage(
  {
    destination: function(req, file, cb){
      cb(null, './upload');
    },
    filename: function(req, file, cb){
      cb(null, Date.now() + file.originalname);
    }
  }
);

var upload = multer( {storage} );

app.post('/xulyupload', upload.single('avatar'), (req, res) => {
  res.send('Da nhan duoc file');
});
