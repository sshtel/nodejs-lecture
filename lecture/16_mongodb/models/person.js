var mongoose = require('mongoose')

var Schema = mongoose.Schema;

schema = new Schema({
    username: String,
    fname: String,
    lname: String,
    address: String
})

module.exports = mongoose.model('Person', schema);