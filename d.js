function add(x){
  return function (y){
    return x + y;
  }
}

var addTen = add(10);
console.log(typeof addTen);
console.log(add(4)(3));
