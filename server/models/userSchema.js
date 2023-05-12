/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    name: { type: String, required: false, unique: false },
    surname: { type: String, required: false, unique: false },
    city: { type: String, required: false, unique: false },
    university: { type: String, required: false, unique: false },
    id: { type: String, required: false, unique: true },
    photoURL: { type: String, required: false, unique: false },
    age: { type: String, required: false, unique: false },
    posts: { type: Array, required: false, unique: false },
    friends: { type: Array, required: false, unique: false },
  },
  {
    versionKey: false,
  },
);

module.exports = mongoose.model('Users', userSchema);
