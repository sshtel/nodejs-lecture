'use strict'

console.log('done!');
var datetime = require('node-datetime');
console.log('App started! ' + datetime.create().format("Y/m/dTH:M:S") );


var appName = ""
var apiKey = ""

var config = {
    apiKey: apiKey,
    authDomain: appName + ".firebaseapp.com",
    databaseURL: "https://" + appName + ".firebaseio.com",
    storageBucket: appName + ".appspot.com"
  };
var firebase = require('firebase');
var app = firebase.initializeApp(config);

var device_type = 'awair';
var device_id = 1;


function test() {
    var temp = 22;
    var humid = 70;
    var co2 = 1234;
    var voc = 335;
    var dust = 32;
    var payload = {
        temp : temp,
        humid : humid,
        co2 : co2,
        voc: voc,
        dust: dust
    }
    setData(device_type, device_id, payload);
}

function setData(device_type, device_id, payload){
        //check data
    firebase.database().ref("/devices/" + device_type + "/" + device_id + "/sensors/").once('value').then(function(snapshot) {
        var count = 0;
        //console.log(snapshot.val());
        if(snapshot.val() == null) {
            count = 0;
        } else {
            count = (snapshot.val().length);
            console.log('next count : ' + count);
        }
        var obj = {
            "timestamp": datetime.create().format("Y/m/dTH:M:S"),
            "payload": payload
        };

        var ref = firebase.database().ref("/devices/" + device_type + "/" + device_id + "/sensors/" + count);
        ref.set(obj);
        console.log('update to server : /devices/' + device_type + '/' + device_id + '/sensors/' + count);
        console.log(JSON.stringify(obj));

    });
}


var email ="steve@getawair.com"
var password = "12345678"


var isSigned = false;
firebase.auth().onAuthStateChanged(function(user) {
	if (user) {
		console.log("approved! start service..");
        //run test app
        setInterval(test, 3000);
	} else {
	}
});

function login() {
	console.log("authenticating now....")
	firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        if(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/wrong-password') {
                alert('Wrong password.');
            } else {
                alert(errorMessage);
            }
            console.log(error);
            process.exit(1);
        }
	});
}

login();
