// connect to mongodb using mongoose
// getAllPeople
//getSinglePerson
//createPerson

const mongoose = require('mongoose');
const Person = require('./models/Person');
mongoose.Promise = require('bluebird');
// Replace "test" with your database name.
mongoose.connect('mongodb://localhost:27017/peopledb');


function getAllPeople() {
return Person.find()
};

function getPerson (personId) {
  return Person.find({_id: personId }).catch(function (err) {
    console.log(err);
  });
};

function getPersonByUsername (username) {
  return Person.find({ username: username}).catch(function (err) {
    console.log(err);
  });
};

function getPersonByEmail (email) {
  return Person.findbyEmail(email)
}

// function addPerson (newPerson) {
//   const person = new Person(newPerson)
//   person.save(function (err) {
//     console.log(err)
//   })
// }   one way

// function addPerson (newPerson) {
//   const person = new Person({
//     name: 'Spencer Oakes',
//     username: 'soakes84',
//     jobTitle: 'Associate Instructor',
//     living: true,
//     email: 'spencer.oakes@theironyard.com'
//   })
//   person.save(function (err) {
//     console.log(err)
//   })
//   return Promise.resolve('success')
// }  one way to hard code in new person

function addPerson (newPerson) {
  const person = new Person(newPerson)
  person.save(function (err) {
    console.log(err);
  });
  return Promise.resolve('success');
};

function deletePerson (personId) {
  return Person.deleteOne({ _id: personId})
}

module.exports = { getAllPeople, getPerson, getPersonByUsername, addPerson, deletePerson, getPersonByEmail }
