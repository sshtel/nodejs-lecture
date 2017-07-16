var array = [1, 2, 3, 4, 5]

console.log(array[2]); //3

var diffTypeArray = [1, 4.2, String('steve'), function(){ console.log('function is called')} ]
diffTypeArray[0];
diffTypeArray[3]();


diffTypeArray.forEach( (value, index) => {
  console.log(value);
  if(typeof value === 'function') {
    value();
  }
})
