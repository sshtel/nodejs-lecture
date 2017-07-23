var EventEmitter = require('events');
var util = require('util');


function Person(fname, lname) {
    EventEmitter.call(this);
    this.firstname = fname;
    this.lastname = lname;
}

util.inherits(Person, EventEmitter);

var steve = new Person('Steve', 'Song')

steve.on('love', (name) => {
    console.log('fall in love with ' + name)
})

steve.emit('love', 'Subin');