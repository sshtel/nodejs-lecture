'use strict'
const EventEmitter = require('events')

class Person extends EventEmitter {
    constructor(fname, lname) {
        super();
        this.hello = 'Hello World'
        this.firstname = fname;
        this.lastname = lname;
    }

    greet() {
        console.log(`${this.hello} ${this.firstname}`);
        this.emit('hi', 'steve');
    }
}

var steve = new Person('Steve', 'Song');


steve.on('hi', (name) => {
    console.log('hi ' + name);
});


steve.greet();
