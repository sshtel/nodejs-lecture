//Use My Emitter
var MyEmitter = require('./my-emitter')
var myEmitter = new MyEmitter();

myEmitter.on('data', () => {
    console.log('event emitted! data');
});

myEmitter.on('data', () => {
    console.log('event emitter 2nd. data')
})


console.log('testing custome emitter');
myEmitter.emit('data');



//Use NodeJS native module 'events'
var EventEmitter = require('events');
var emitter = new EventEmitter();

emitter.on('data', () => {
    console.log('event emitter of data')
});


emitter.emit('data')