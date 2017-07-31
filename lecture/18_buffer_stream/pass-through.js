const stream = require('stream')
var bufferStream = new stream.PassThrough();

var data = Buffer.from("test")
bufferStream.end(data);  

const fs = require('fs')

var writeStream = fs.createWriteStream('./stream.dat')
bufferStream.pipe(writeStream);