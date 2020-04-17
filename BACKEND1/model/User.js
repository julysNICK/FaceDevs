const mongoose = require("mongoose");
const bcrypt = require('bcrypt-nodejs');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 3,
    max: 250,
  },
  surname: {
    type: String,
    required: true,
    min: 3,
    max: 250,
  },
  email: {
    type: String,
    required: true,
    min: 3,
    max: 250,
  },
  password: {
    type: String,
    required: true,
    min: 5,
    max: 20,
  },
  dateBirth: {
    type: String,
    required: true,
    min: 1,
    max: 200
  },
  Genre: {
    type: String,
    required: true,
    min: 1,
    max: 11,
  },
});

UserSchema.methods.encryptPassword = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

UserSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model("User", UserSchema);
