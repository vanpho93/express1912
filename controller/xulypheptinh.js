const PhepTinh = require('../model/PhepTinh');

module.exports = (req, res) => {
  var {pheptinh, soa, sob} = req.body;
  var pt = new PhepTinh(pheptinh, soa, sob);
  res.send(pt.getOutput());
};
