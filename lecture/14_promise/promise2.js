const fs = require('fs')

var promise = new Promise( (resolve, reject) => {
  // do a thing, possibly async, then…

  fs.readFile('test.json', (err, data) => {
      if(err) { 
          reject( Error('file read failed') );
      }
      else {
          resolve(data)
      }
  })

});



promise.then(

(result) => {
  console.log(result); // "Stuff worked!"
}

, (err) => {
  console.log(err); // Error: "It broke"
}

);


promise.then((result)=> {
    console.log(result);
})
.catch( (err) => {
    console.log(err); 
})

