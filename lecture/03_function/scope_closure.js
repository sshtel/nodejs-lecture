function name(firstName, lastName) {
  
  var callCount = 0;
  var nameIntro = "call me ";

  function makeFullName() {
    var localInner = 0;
    //inner function can access parameter and local variables of first function scope
    console.log( nameIntro + firstName + " " + lastName + " " + (++callCount) + " times" );
  }

  return makeFullName;
}

var fn = name("Steve", "Song");


//
fn();
fn();
fn();