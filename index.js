var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

app.listen(3000);

//route
// app.get('/abc', function(request, response){
//   response.send('Hello')
// });

// app.get('/abc', function(req, res){
//   res.send('Hello');
// });

app.get('/', indexFunction);
//body-parser
app.get('/dangky', (req, res) => {
  res.send(`
    <form action="/xulydangky" method="post">
      <input type="text" name="username" placeholder="username"/>
      <br/><br/>
      <input type="password" name="password" placeholder="password"/>
      <br/><br/>
      <input type="submit" value="Đăng nhập">
    </form>
  `);
});

app.post('/xulydangky', (req, res) => {
  console.log(req.body);
  res.send('Da vao route post xu ly dang ky');
})

function indexFunction(req, res){
  res.send(`<h1>Hello index route</h1>`);
}



app.get('/tinh/:pheptinh/:soa/:sob', function(req, res){
  var {pheptinh, soa, sob} = req.params;
  var pt = new PhepTinh(pheptinh, soa, sob);
  res.send(pt.getOutput());
});

// function xuly(req, res){
//   var {pheptinh, soa, sob} = req.params;
//   var dau = ' % ';
//   switch (pheptinh) {
//     case 'cong':
//       dau = ' + ';
//       break;
//     case 'tru':
//       dau = ' - ';
//       break;
//     case 'nhan':
//       dau = ' * ';
//   }
//   var strPhepTinh = soa + dau + sob;
//   var kq = eval(strPhepTinh);
//   res.send(`${strPhepTinh} = ${kq}`);
// }

app.get('api/:ten/:tuoi', function(req, res){
  var {ten, tuoi} = req.params;
  res.send(`Xin chao ban ${ten}: ${tuoi}`);
});

console.log(eval('2+3'));

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
