function pass_by_ref(obj) {
    obj.hello = function() {
        console.log('Hello! ' + this.profile.firstname);
    }
    
    obj.profile = {
        'firstname':'Steve',
        'lastname':'Song'
    }
}

var newObj  = {};
pass_by_ref(newObj);
newObj.hello();


// var newValue = 0;
// pass_by_ref(newValue);
// newValue.hello(); //error