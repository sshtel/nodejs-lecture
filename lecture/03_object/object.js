
//object
var person = {
  firstname : 'Steve',
  lastname: 'Song',
  hello: function() {
    console.log('Hello, ' + this.firstname + ' ' + this.lastname);
  }
}

person.hello();
console.log(person['firstname']);


//empty object
var newObj = {};
newObj.hey = 'Hey';
newObj.number = 1;


console.log(newObj.hey);