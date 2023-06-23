import { Schema, model } from 'mongoose';

const postSchema = new Schema(
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

export default model('Posts', postSchema);
