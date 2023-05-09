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
  },
  {
    versionKey: false,
  },
);

module.exports = mongoose.model('User', userSchema);
// email: user.email,
// firstName: values.firstName,
// surname: values.surname,
// age: values.age,
// city: values.city,
// university: values.university,
// id: user.uid,
// token: user.accessToken,
