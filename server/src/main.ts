import express, { json, urlencoded, static as staticFiles } from 'express';
import { connect, ConnectOptions } from 'mongoose';
import cors from 'cors';
import { config } from 'dotenv';
import { join } from 'path';
import { usersRouter } from './routes/users';
import { postsRouter } from './routes/posts';
import { CLIENT_URL, MONGO_PATH, SERVER_PORT } from './secrets/secrets';

config();

ggg();
function ggg() {}

const app = express();

console.log(`cors include path: ${CLIENT_URL}`);

connect(String(MONGO_PATH), {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as ConnectOptions)
  .then(() => {
    app.listen(SERVER_PORT, () => {
      console.log(`app listens on port: ${SERVER_PORT}`);
    });
  })
  .catch((err: any) => {
    console.error(
      'MongoDB connection error. Please make sure MongoDB is running. ' + err,
    );
    process.exit();
  });

app.use(
  cors({
    origin: CLIENT_URL,
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
