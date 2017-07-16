
function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}

Person.prototype.hello = function() {
    console.log ('hello ' + this.firstname + ' ' + this.lastname);
}

Person.prototype.familyName = () => {
    console.log('My family name is ' + this.lastname);
}

Person.prototype.address = "Seoul";


//Construct object
var steve = new Person('Steve', 'Song');

steve.hello();
console.log(steve.__proto__);
console.log(steve.address);

//declare new property
steve.newProp1 = "newProp1";
console.log(steve.newProp1);


//Construct another object
var subin = new Person('Subin', 'Park');
subin.address = "Samcheonpo";

console.log(subin.address);
console.log(steve.__proto__ === subin.__proto__);



//Javascript String Object inheritance !!
String.prototype.hello = function() {
  console.log('hello ' + this.valueOf());
}
"steve".hello();