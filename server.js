var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.listen(3000);

app.get('/tinh', (req, res) => {
  res.send(`
    <form action="/xulypheptinh" method="post">
      <input type="text" name="pheptinh" placeholder="Phép tính"/>
      <br/><br/>
      <input type="number" name="soa" placeholder="Số a"/>
      <br/><br/>
      <input type="number" name="sob" placeholder="Số b"/>
      <br/><br/>
      <input type="submit" value="Tính">
    </form>
  `);
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
