var url = require('url');

// 주소 문자열을 url객체로 만들기
var curURL = url.parse('https://naver.com');

//url객체를 주소 문자열로 만들기
var curStr = url.format(curURL);

console.log('주소 문자열: %s',curStr);
console.dir(curURL);