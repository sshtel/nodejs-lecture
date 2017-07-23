
var Person = {
    firstname: "",
    lastname: "",
    sayhi: function() {
        console.log ('Hi ' + this.firstname + ' ' + this.lastname )
    },
    hello: function() {
        console.log('Hello World! ' + this.firstname)
    }
}



var steve = Object.create(Person);
steve.firstname = "Steve"
steve.lastname = "Song"

steve.sayhi()
steve.hello()