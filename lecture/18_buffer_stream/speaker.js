const Speaker = require('speaker')
const lame = require('lame');
var decoder = lame.Decoder();
const fs = require('fs')

const audioOptions = {
  channels: 1,          // 2 channels 
  bitDepth: 16,         // 16-bit samples 
  sampleRate: 24000     // 44,100 Hz sample rate 
}


var stream = fs.createReadStream("./asset/sample02.mp3", audioOptions).pipe(decoder).on("format", function (format) {
  this.pipe(new Speaker(format))
}).on("data", function (data) {
  console.log(data)
})
