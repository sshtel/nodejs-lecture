var func1 = function() {
    console.log('module func1');
}

var func2 = function() {
    console.log('module func2');
}

module.exports.func1 = func1;
module.exports.func2 = func2;
module.exports.str1 = "String value"
module.exports.number1 = 1;