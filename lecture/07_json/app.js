var obj = require('./profile.json')

console.log('my name is ' + obj.firstname + ' ' + obj.lastname);

var sensor_value = require('./sensor_value.json')
console.log(sensor_value.data[0]);
console.log(sensor_value.data[1]);



//read text file
var fs = require('fs')
fs.readFile('./profile.json', (err, data) => {
    if(err) return;
    if(data) {
        var obj = JSON.parse(data);
        console.log(obj);

        var str = JSON.stringify(obj)
        console.log(str);
    }
});

