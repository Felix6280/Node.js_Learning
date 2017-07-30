var Calc = require('./4');

var calc = new Calc();
calc.emit('stop');

console.log(Calc.title + '에 stop이벤트 전달함');