var util = require('util')
var name = "Steve"

var msg = util.format('Hello, %s', name);

util.log('[Log]' + msg);