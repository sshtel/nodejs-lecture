function Person(name) {
  var a = 1;
  this.name = name;
  this.callName = function() {
    console.log(this.name + ' ' + a);
  }

  console.log('Object Constructed ' + a);
}

var steve = new Person('steve');
var subin = new Person('subin')

steve.callName();
subin.callName();

var person = Person('human'); //function call does not return object
console.log(person);