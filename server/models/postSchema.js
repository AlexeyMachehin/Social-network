/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const mongoose = require('mongoose');

const postSchema = mongoose.Schema(
  {
    message: { type: String, required: true },
    likes: { type: Number, required: false },
    id: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

module.exports = mongoose.model('Posts', postSchema, 'users');
