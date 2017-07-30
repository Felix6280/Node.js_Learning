var fs = require('fs');

//파일에 데이터 쓰기
fs.writeFile('./output.txt', 'Hello World!', function(err){
    if(err){
        console.log('Error: ' + error);
    }

    console.log('out.txt파일에 데이터 쓰기 완료');
});