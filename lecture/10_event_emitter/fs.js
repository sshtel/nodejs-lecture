const fs = require('fs')


fs.readFile('./test.json', (err, data) => {
    if(err) throw 'error'
    console.log(data);
});

console.log('test console..................')


var buff = fs.readFileSync('./test.json', 'utf-8')

console.log(buff);