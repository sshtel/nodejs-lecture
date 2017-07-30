var config = require('./config')
var mongoose = require('mongoose')
var ModelPerson = require('./models/person')

mongoose.connect(config.getDbConnectionString());


ModelPerson.findById( {_id: '597db04594873a6fa0a44d9c'}, (err, res) => {
    if(err) {
        // console.error(err);
        console.log('err!')
    } else {
        console.log(res)
    }
});

ModelPerson.findByIdAndUpdate( {_id: '597db04594873a6fa0a44d9c'}, 
    { username: 'new username', fname:'Firstname', lname:'Lastname' },
    (err, res) => {
    if(err) {
        // console.error(err);
        console.log('err!')
    } else {
        console.log(res)
    }
});

//remove data
ModelPerson.findByIdAndRemove( {_id: ''},
    (err, res) => {
    if(err) {
        // console.error(err);
        console.log('err!')
    } else {
        console.log(res)
    }
});


//find item
ModelPerson.find( {fname: 'Rutledge'}, (err, res) => {
    if(err) {
        // console.error(err);
        console.log('err!')
    } else {
        console.log(res)
    }
});


//save data
ModelPerson({
    username: 'sshtel',
    fname: 'Steve',
    lname: 'Song',
    address: 'Seoul'
})
.save( (err) => {
    if(err) console.error(err);
})

