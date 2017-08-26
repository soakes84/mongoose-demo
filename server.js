const express = require('express');
const mustacheExpress = require('mustache-express');
const { getAllPeople, getPerson, getPersonByUsername, addPerson, deletePerson, getPersonByEmail } = require('./dal');
const app = express();

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
  getAllPeople().then(function (people) {
    res.json(people)
  })
});

app.get('/people')

app.get('/people/:personID', function (res, req) {
  const personID = req.params.personID;
  getPerson(personID).then(function (person) {
    res.json(person[0]);
  })
})

app.get('/person/:username', function (req, res) {
  const username = req.params.username;
  getPersonByUsername(username).then(function (person) {
    res.json(person);
})

app.get('/person/:email', function (req, res) {
  const email = req.params.email;
  getPersonByUsername(email).then(function (person) {
    res.json(person);
})

// app.get('/people/person/new', function (req, res) {
//   addPerson({}).then(function () {
//       res.send('it worked')
//   })
// }) just to make sure it worked

app.delete('/people/:personId', function (req, res) {
  const personId = req.params.personId
  deletePerson(personId).then(function (response) {
    console.log(response)
    res.send('it gone')
  })
})

app.post('/new', function (req, res) {
  addPerson(req.body).then(function () {
      res.send('it worked')
  })
})

app.listen(3000, function () {
  console.log('De Server Started On Port: 3000')
})
