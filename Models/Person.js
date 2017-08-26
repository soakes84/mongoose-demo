const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
  name: { type: String, require: true },
  jobTitle: {type: String },
  email: { type: String, require: true },
  living: { type: Boolean, default: true} ,
  username: { type: String },
  avatar: { type: String }, //url to img
  password: { type: String, select: false}
})

PersonSchema.statics.findbyEmail = function (email, cb) {
  return this.find({ email: email })
}

const Person = mongoose.model('Person', PersonSchema);

module.exports = Person;
