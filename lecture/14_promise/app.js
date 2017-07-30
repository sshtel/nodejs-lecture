var Promise = require('promise');

var asyncfunction = function(param){
      return new Promise(function(fullfilled,rejected){
           setTimeout(
                 function(){
                       rejected(Error('this is err '+param));
                 },2000);
      });

}

asyncfunction(' terry ')
.then(console.log,console.error);

asyncfunction('cath')
.then(console.log)
.catch(console.error);

