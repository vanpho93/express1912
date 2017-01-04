var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.listen(3000);

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/tinh', (req, res) => {
  res.render('home');
});

app.post('/xulypheptinh', (req, res) => {
  var {pheptinh, soa, sob} = req.body;
  var pt = new PhepTinh(pheptinh, soa, sob);
  res.send(pt.getOutput());
})

class PhepTinh {
  constructor(pt, soa, sob){
    this.pt = pt;
    this.soa = soa;
    this.sob = sob;
  }
  getOutput(){
    var {pt, soa, sob} = this;
    var dau = ' % ';
    switch (pt) {
      case 'cong':
        dau = ' + ';
        break;
      case 'tru':
        dau = ' - ';
        break;
      case 'nhan':
        dau = ' * ';
    }
    var strPhepTinh = soa + dau + sob;
    var kq = eval(strPhepTinh);
    return strPhepTinh + ' = ' + kq;
  }
}
