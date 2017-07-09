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

//IIFE (Immediately Invoked Function Expression)

(function immediate(param) {
  console.log('Immediate Function call. param : ' + param);
}('String Parameter'));
