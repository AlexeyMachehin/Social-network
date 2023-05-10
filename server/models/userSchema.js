/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    email: { type: String, required: true },
    name: { type: String, required: false },
    surname: { type: String, required: false },
    city: { type: String, required: false },
    university: { type: String, required: false },
    id: { type: String, required: true },
    token: { type: String, required: false },
    age: { type: String, required: false },
    posts: { type: Array, required: false },
  },
  {
    versionKey: false,
  },
);

module.exports = mongoose.model('Users', userSchema, 'users');
