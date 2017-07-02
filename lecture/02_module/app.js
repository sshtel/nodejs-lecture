require('./simple_module.js')

var greet = require('./greet.js')
greet();


var modules = require('./modules.js');
modules.func1();
modules.func2();

var my_mod = require('./my_module');  //NOT ./my_module/index.js
my_mod.module1();
my_mod.module2();