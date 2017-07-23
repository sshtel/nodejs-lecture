//require module means it read code and run it
require('./simple_module.js')

//require returns 'exports' object
var greet = require('./greet.js')
greet();


var modules = require('./modules.js');
modules.func1();
modules.func2();
console.log(modules.str1);
console.log(modules.number1);


var person1 = require('./person.js')
person1.name = "Steve"
person1.sayhi();
var person2 = require('./person.js')
person2.name = "Subin"
person2.sayhi();


//module structure example
var my_mod = require('./my_module');  //NOT ./my_module/index.js
my_mod.module1();
my_mod.module2();