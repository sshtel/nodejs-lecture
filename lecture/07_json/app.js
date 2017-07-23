var obj = require('./profile.json')

console.log('my name is ' + obj.firstname + ' ' + obj.lastname);

var sensor_value = require('./sensor_value.json')
console.log(sensor_value.data[0]);
console.log(sensor_value.data[1]);