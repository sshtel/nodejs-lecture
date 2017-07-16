function Person(name) {
  var a = 1;
  this.name = name; //instance property
  this.callName = function() { //instance method
    console.log(this.name + ' ' + a);
  }

  function func() {
    console.log('func()');
  }

  console.log('Object Constructed ' + a);
}

var steve = new Person('steve');
var subin = new Person('subin')

steve.callName();
subin.callName();

//steve.func(); // inner function cannot be called by object reference

var person = Person('human'); //function call does not return object
console.log(person);