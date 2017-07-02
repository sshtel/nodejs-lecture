//primitive values
const value1 = 1;
var   value2 = 1;


//object
var person = {
  firstname : 'Steve',
  lastname: 'Song',
  hello: function() {
    console.log('Hello, ' + this.firstname + ' ' + this.lastname);
  }
}

person.hello();
person.firstname = 'Seunghwa';
console.log(person['firstname']);


//assign empty object
person = {};
person.hey = 'Hey';
person.number = 1;

console.log(person.hey);



//constant reference variable is pointing object
const person2 = {
  firstname : 'Subin',
  lastname: null,
  sayhi: function() {
    console.log('Hello, ' + this.firstname + ' ' + this.lastname);
  }
}

person2.lastname = 'Park'; //properties can be modified
console.log(person2);