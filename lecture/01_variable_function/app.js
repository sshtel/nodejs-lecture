var variable = 1;
console.log(variable);

variable = 3.5;
console.log(variable);

variable = 'This is String'
console.log(variable);


variable = function () {
    console.log('This is function call')
}
console.log(variable);
variable();


// Function example
var a = 1;
var b = 2;

function greet() {
    console.log("hi");
}
greet();


//parameter is function
function firstClassFunction(fn) {
    fn();
}
firstClassFunction(greet);
