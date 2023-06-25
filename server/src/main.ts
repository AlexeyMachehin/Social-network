import express from 'express';
import { json, urlencoded, static as staticFiles } from 'express';
import { connect, ConnectOptions } from 'mongoose';
import cors from 'cors';
import { config } from 'dotenv';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { usersRouter } from './routes/users.js';
import { postsRouter } from './routes/posts.js';

config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const isDev = process.env.NODE_ENV === 'development';
const path = isDev
  ? 'http://localhost:5173'
  : 'https://social-network-vk.netlify.app';
const port = isDev ? 5000 : process.env.SERVER_PORT;

console.log(`cors include path: ${path}`);

connect(
  `mongodb+srv://alex:${process.env.MONGO_PASS}@social-network-cluster.jreewt4.mongodb.net/social-network?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true } as ConnectOptions,
).then(() => {
  app.listen(port, () => {
    console.log(`app listens on port: ${port}`);
  });
});

app.use(
  cors({
    origin: path,
  }),
);
app.use(json());
app.use(urlencoded({ extended: true }));
app.use('/static', staticFiles(join(__dirname, 'assets')));
app.use('/api/users', usersRouter);
app.use('/api/posts', postsRouter);

app.get('/', (req, res) => {
  res.send('Database connected');
});
