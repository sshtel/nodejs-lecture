var config = require('./config')
var mongoose = require('mongoose')
var modelPerson = require('./models/person')

mongoose.connect(config.getDbConnectionString())

//Add Seed data

var seedData = [
  {
    "username": "9dfb615d-793a-496a-9b9b-72088e36809a",
    "fname": "Rutledge",
    "lname": "Barron",
    "address": "291 Village Road, Mooresburg, Florida, 7856"
  },
  {
    "username": "de763d04-8035-4fe8-891f-2645e3b63b15",
    "fname": "Alyssa",
    "lname": "Hammond",
    "address": "929 Broome Street, Marysville, Puerto Rico, 2205"
  }
]

modelPerson.create(seedData, function(err, results) {
  console.log(results);
});
