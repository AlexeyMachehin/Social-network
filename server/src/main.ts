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
const port = isDev ? 5000 : process.env.SERVER_PORT;
const path = isDev
  ? process.env.CLIENT_DEV_PATH
  : process.env.CLIENT_PRODUCTION_PATH;

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

// Значение same-origin-allow-popups рекомендуется для заголовка Cross-Origin-Opener-Policy на страницах,
//  где отображается кнопка «Войти с помощью Google» и/или Google One Tap.
