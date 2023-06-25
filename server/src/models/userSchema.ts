import { Schema, model } from 'mongoose';

const userSchema = new Schema(
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

export default model('Users', userSchema);
